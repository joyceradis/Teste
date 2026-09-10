import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInput } from '../scripts/config.mjs';

test('buildInput creates a 16:9 Lu image-to-video request', () => {
  const input = buildInput('https://example.com/lu.png', 'walks to the car');
  assert.equal(input.image_url, 'https://example.com/lu.png');
  assert.match(input.prompt, /walks to the car/);
  assert.match(input.prompt, /same woman/i);
  assert.equal(input.num_frames, 121);
  assert.equal(input.frames_per_second, 24);
});
