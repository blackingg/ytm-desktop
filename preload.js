const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('ytm', {
  playPause: () => document.querySelector('.play-pause-button')?.click(),
  next: () => document.querySelector('.next-button')?.click(),
  getTrackInfo: () => {
    return {
      title: document.querySelector('.title')?.textContent,
      artist: document.querySelector('.byline')?.textContent,
    };
  }
});