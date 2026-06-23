import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const videos = [
  { name: 'sample1.mp4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'sample2.mp4', url: 'https://www.w3schools.com/html/movie.mp4' },
  { name: 'sample3.mp4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'sample4.mp4', url: 'https://www.w3schools.com/html/movie.mp4' },
  { name: 'sample5.mp4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'sample6.mp4', url: 'https://www.w3schools.com/html/movie.mp4' },
  { name: 'sample7.mp4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'sample8.mp4', url: 'https://www.w3schools.com/html/movie.mp4' },
  { name: 'sample9.mp4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { name: 'sample10.mp4', url: 'https://www.w3schools.com/html/movie.mp4' },
];

const videoDir = path.join(__dirname, 'public', 'videos');

// Ensure directory exists
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

videos.forEach(video => {
  const filepath = path.join(videoDir, video.name);
  if (!fs.existsSync(filepath)) {
    console.log(`Downloading ${video.name}...`);
    https.get(video.url, response => {
      response.pipe(fs.createWriteStream(filepath));
      response.on('end', () => console.log(`${video.name} downloaded`));
    }).on('error', err => console.error(`Error downloading ${video.name}:`, err.message));
  }
});
