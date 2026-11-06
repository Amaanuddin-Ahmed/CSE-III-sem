with open('CSE-III-sem/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

target = """  function renderNoteSummary(summary, driveLink) {
    const topics = Array.isArray(summary.topics) ? summary.topics : [];
    const mustKnow = Array.isArray(summary.mustKnow) ? summary.mustKnow : [];

    const topicHtml = topics.map((topic, i) => {
      const points = (topic.points || []).filter(Boolean);
      const formulas = (topic.formulas || []).filter(Boolean);
      return `
        <section class="note-summary-topic note-topic-${i % 5}">
          <h3><span class="note-topic-number">${String(i + 1).padStart(2, '0')}</span>${escapeHtml(topic.title)}</h3>
          ${topic.summary ? `<p>${escapeHtml(topic.summary)}</p>` : ''}
          ${points.length ? `<ul>${points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>` : ''}
          ${formulas.length ? `<div class="note-summary-formulas">${formulas.map(f => `<div class="note-summary-formula"><i class="fa-solid fa-square-root-variable" aria-hidden="true"></i><span>${escapeHtml(f)}</span></div>`).join('')}</div>` : ''}
          ${topic.example ? `<div class="note-summary-example"><span class="note-example-label">Example</span>${escapeHtml(topic.example)}</div>` : ''}
        </section>`;
    }).join('');"""

replacement = """  function renderNoteSummary(summary, driveLink) {
    const topics = Array.isArray(summary.topics) ? summary.topics : [];
    const mustKnow = Array.isArray(summary.mustKnow)
      ? summary.mustKnow
      : (Array.isArray(summary.mustKnowQuestions) ? summary.mustKnowQuestions : []);
    const formulas = Array.isArray(summary.formulas) ? summary.formulas.filter(Boolean) : [];
    const examTips = Array.isArray(summary.examTips) ? summary.examTips.filter(Boolean) : [];

    const topicHtml = topics.map((topic, i) => {
      const topicTitle = topic.title || topic.name || `Key Concept ${i + 1}`;
      const topicSummary = topic.summary || topic.keyTakeaway || '';
      const points = (topic.points || topic.subtopics || []).filter(Boolean);
      const topicFormulas = (topic.formulas || []).filter(Boolean);
      return `
        <section class="note-summary-topic note-topic-${i % 5}">
          <h3><span class="note-topic-number">${String(i + 1).padStart(2, '0')}</span>${escapeHtml(topicTitle)}</h3>
          ${topicSummary ? `<p>${escapeHtml(topicSummary)}</p>` : ''}
          ${points.length ? `<ul>${points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>` : ''}
          ${topicFormulas.length ? `<div class="note-summary-formulas">${topicFormulas.map(f => `<div class="note-summary-formula"><i class="fa-solid fa-square-root-variable" aria-hidden="true"></i><span>${escapeHtml(f)}</span></div>`).join('')}</div>` : ''}
          ${topic.example ? `<div class="note-summary-example"><span class="note-example-label">Example</span>${escapeHtml(topic.example)}</div>` : ''}
        </section>`;
    }).join('');"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open('CSE-III-sem/app.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS: Patched renderNoteSummary in app.js")
else:
    # Try normalizing line endings
    content_norm = content.replace('\r\n', '\n')
    target_norm = target.replace('\r\n', '\n')
    if target_norm in content_norm:
        content_norm = content_norm.replace(target_norm, replacement.replace('\r\n', '\n'), 1)
        with open('CSE-III-sem/app.js', 'w', encoding='utf-8') as f:
            f.write(content_norm)
        print("SUCCESS: Patched renderNoteSummary in app.js with normalized line endings")
    else:
        print("ERROR: Target block not found in app.js")
