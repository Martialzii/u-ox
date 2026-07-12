import test from 'node:test';
import assert from 'node:assert/strict';
import { buildProjectSuggestion, calculateSubscriptionAmount } from '../src/generator.js';

test('buildProjectSuggestion returns a complete concept object', () => {
  const result = buildProjectSuggestion('a calm AI planner for farmers', 'aurora');

  assert.equal(result.title.startsWith('U-OX •'), true);
  assert.equal(result.subtitle.includes('experience') || result.subtitle.includes('workflow') || result.subtitle.includes('product'), true);
  assert.equal(result.features.length, 3);
  assert.equal(result.accent, '#8f7cff');
  assert.equal(result.styleLabel, 'Aurora');
});

test('buildProjectSuggestion falls back to a default prompt', () => {
  const result = buildProjectSuggestion('   ', 'echo');

  assert.match(result.summary, /a useful, modern digital experience/);
  assert.equal(result.styleLabel, 'Echo');
});

test('calculateSubscriptionAmount scales with project value', () => {
  assert.equal(calculateSubscriptionAmount(5000), 10);
  assert.equal(calculateSubscriptionAmount(25000), 25);
  assert.equal(calculateSubscriptionAmount(120000), 120);
});
