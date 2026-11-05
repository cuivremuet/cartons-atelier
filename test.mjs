import test from 'node:test';
import assert from 'node:assert/strict';
import { renderCard } from './main.mjs';
test('contrat et limite', () => {
  assert.match(renderCard({ title: 'T', classification: 'C', date: 'D', id: 'I' }), /viewBox="0 0 1280 480"/);
  assert.throws(() => renderCard({ title: 'x'.repeat(65), classification: 'C', date: 'D', id: 'I' }));
});

