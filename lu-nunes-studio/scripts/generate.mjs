import { fal } from '@fal-ai/client';
import { buildInput } from './config.mjs';
import fs from 'node:fs/promises';

const imageUrl = process.env.LU_IMAGE_URL || process.argv[2];
const scene = process.env.LU_SCENE || process.argv.slice(3).join(' ') || 'Lu records a casual luxury lifestyle vlog at home, then picks up her handbag and walks toward the door.';
if (!process.env.FAL_KEY) throw new Error('FAL_KEY is required');
if (!imageUrl) throw new Error('LU_IMAGE_URL or first CLI argument is required');

const result = await fal.subscribe('fal-ai/wan/v2.2-a14b/image-to-video', {
  input: buildInput(imageUrl, scene),
  logs: true,
  onQueueUpdate(update) {
    if (update.status === 'IN_PROGRESS') {
      for (const log of update.logs ?? []) console.log(log.message);
    }
  }
});

const videoUrl = result.data?.video?.url;
if (!videoUrl) throw new Error('No video URL returned');
await fs.mkdir('output', { recursive: true });
await fs.writeFile('output/result.json', JSON.stringify({ requestId: result.requestId, videoUrl }, null, 2));
console.log(videoUrl);
