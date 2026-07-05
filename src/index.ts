import { platform } from 'node:process';
import { Media } from './media.js';

const media = new Media(platform)
const MediaPlaying = await media.getCover()

console.log(MediaPlaying)