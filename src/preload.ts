import { contextBridge } from 'electron';
import { TrackInfo, YTMApi } from './types';

contextBridge.exposeInMainWorld('ytm', {
  playPause: (): void => {
    const button = document.querySelector('.play-pause-button') as HTMLElement;
    button?.click();
  },
  next: (): void => {
    const button = document.querySelector('.next-button') as HTMLElement;
    button?.click();
  },
  getTrackInfo: (): TrackInfo => {
    const titleElement = document.querySelector('.title') as HTMLElement;
    const artistElement = document.querySelector('.byline') as HTMLElement;
    
    return {
      title: titleElement?.textContent || null,
      artist: artistElement?.textContent || null,
    };
  }
} as YTMApi);