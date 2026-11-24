import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// CloudFridge: an app that lets busy professionals open their fridge from the office,
// just to confirm the milk is still exactly where they left it.
// One sentence, 204 characters, deadpan founder confidence throughout.
const entry = "CloudFridge lets busy professionals open their fridge from the office just to confirm the milk is still exactly where they left it, because peace of mind should never require standing in your own kitchen.";

if (entry.length === 0 || entry.length > 240) {
  throw new Error('Entry must be between 1 and 240 characters.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), entry);
