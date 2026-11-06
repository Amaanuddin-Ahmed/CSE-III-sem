/**
 * Script to generate high-quality academic solutions for COA Unit 3
 * Topics:
 * - Data representation (fixed-point, floating-point, IEEE 754)
 * - 2's complement arithmetic & subtraction
 * - Booth's multiplication algorithm (step-by-step register tables)
 * - Division algorithms (restoring & non-restoring with register tables)
 * - Decimal arithmetic & BCD addition/subtraction
 * - CPU & ALU organization (fixed-point add/sub hardware, 4-bit ALU)
 * - Floating point addition and subtraction algorithms
 */

const fs = require('fs');

const questions = JSON.parse(fs.readFileSync('data/coa-unit-3-4-5-questions.json', 'utf8'));
const u3Questions = questions.filter(q => Number(q.chapter) === 3);

console.log(`Processing ${u3Questions.length} Unit 3 questions...`);
