/**
 * Export all your sagas here so the sagaMiddleware imports them
 */
import { uploadImage } from './uploadImage.saga';
import { recordAudio } from './recordAudio.saga';
import { playback } from './playback.saga';
import { uploadAudio } from './uploadAudio.saga';
import { getProject } from './getProject.saga';
import { createProject } from './createProject.saga';

export default [
  uploadImage,
  recordAudio,
  playback,
  uploadAudio,
  getProject,
  createProject,
];
