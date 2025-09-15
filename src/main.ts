import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.whenReady().then((): void => {
  const win: BrowserWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  win.loadURL('https://music.youtube.com');
});