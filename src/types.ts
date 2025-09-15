export interface TrackInfo {
  title: string | null;
  artist: string | null;
}

export interface YTMApi {
  playPause: () => void;
  next: () => void;
  getTrackInfo: () => TrackInfo;
}

declare global {
  interface Window {
    ytm: YTMApi;
  }
}