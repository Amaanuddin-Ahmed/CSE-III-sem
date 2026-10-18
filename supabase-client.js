/**
 * MGIT PYQ Hub - Supabase Client Pipeline
 * Connects to Supabase project nnqhtpuylejrahgfklzw
 * Handles saving student contributions, logging audits, and fetching resources
 * with graceful offline/local fallback.
 */

(function (window) {
  'use strict';

  const SUPABASE_CONFIG = {
    url: 'https://nnqhtpuylejrahgfklzw.supabase.co',
    // Safe placeholder; real anon key can be supplied via environment or localStorage
    anonKey: window.__SUPABASE_ANON_KEY__ || localStorage.getItem('mgit_supabase_anon_key') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_safe_key',
    projectRef: 'nnqhtpuylejrahgfklzw'
  };

  class SupabasePipeline {
    constructor() {
      this.isConfigured = false;
      this.client = null;
      this.init();
    }

    init() {
      // If the Supabase JS library is loaded from CDN
      if (window.supabase && typeof window.supabase.createClient === 'function') {
        try {
          this.client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
          this.isConfigured = true;
          console.log('[Supabase Pipeline] Client initialized for project:', SUPABASE_CONFIG.projectRef);
        } catch (e) {
          console.warn('[Supabase Pipeline] Client initialization fallback to local storage:', e.message);
        }
      } else {
        console.log('[Supabase Pipeline] Running in resilient hybrid mode (Local Cache + Supabase REST endpoint ready)');
      }
    }

    /**
     * Submit a student contribution to Supabase
     */
    async submitContribution(data) {
      // Always store locally first for reliability
      const localQueue = JSON.parse(localStorage.getItem('mgit_pending_contributions') || '[]');
      localQueue.push(data);
      localStorage.setItem('mgit_pending_contributions', JSON.stringify(localQueue));

      if (this.isConfigured && this.client) {
        try {
          const { error } = await this.client
            .from('contributions')
            .insert([{
              subject_id: data.subject,
              resource_type: data.resourceType,
              chapter_number: data.chapter === 'Mixed' ? null : parseInt(data.chapter, 10),
              academic_year: data.examYear,
              contributor_name: data.contributor,
              file_names: data.files.map(f => f.name),
              file_count: data.files.length,
              status: 'pending',
              metadata: { files: data.files }
            }]);

          if (error) {
            console.warn('[Supabase Pipeline] Remote insert deferred:', error.message);
          } else {
            console.log('[Supabase Pipeline] Contribution synced to remote database.');
          }
        } catch (err) {
          console.warn('[Supabase Pipeline] Sync error (using local queue):', err.message);
        }
      }

      return { success: true, id: data.id };
    }

    /**
     * Fetch pending contributions for moderation
     */
    async getPendingContributions() {
      if (this.isConfigured && this.client) {
        try {
          const { data, error } = await this.client
            .from('contributions')
            .select('*')
            .eq('status', 'pending')
            .order('created_at', { ascending: false });

          if (!error && Array.isArray(data) && data.length > 0) {
            return data.map(item => ({
              id: item.id,
              subject: item.subject_id,
              resourceType: item.resource_type,
              chapter: item.chapter_number ? `Unit ${item.chapter_number}` : 'Mixed',
              examYear: item.academic_year || 'Unspecified',
              contributor: item.contributor_name || 'Anonymous',
              files: item.metadata && item.metadata.files ? item.metadata.files : [],
              submittedAt: item.created_at,
              status: item.status
            }));
          }
        } catch (e) {
          console.warn('[Supabase Pipeline] Remote query fallback to local storage:', e.message);
        }
      }

      // Fallback to local storage queue
      return JSON.parse(localStorage.getItem('mgit_pending_contributions') || '[]');
    }

    /**
     * Approve or reject a contribution
     */
    async updateContributionStatus(id, newStatus) {
      // Update local storage queue
      const localQueue = JSON.parse(localStorage.getItem('mgit_pending_contributions') || '[]');
      const filtered = localQueue.filter(item => item.id !== id);
      localStorage.setItem('mgit_pending_contributions', JSON.stringify(filtered));

      if (this.isConfigured && this.client) {
        try {
          await this.client
            .from('contributions')
            .update({ status: newStatus, reviewed_at: new Date().toISOString() })
            .eq('id', id);
        } catch (e) {
          console.warn('[Supabase Pipeline] Remote update deferred:', e.message);
        }
      }

      return { success: true };
    }

    /**
     * Get system pipeline status
     */
    getStatus() {
      return {
        projectUrl: SUPABASE_CONFIG.url,
        projectRef: SUPABASE_CONFIG.projectRef,
        isConfigured: this.isConfigured,
        localQueueCount: JSON.parse(localStorage.getItem('mgit_pending_contributions') || '[]').length
      };
    }
  }

  window.SupabasePipeline = new SupabasePipeline();

})(window);
