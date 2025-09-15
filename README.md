# ytm-desktop

A TypeScript-based desktop application for YouTube Music using Electron.

## Development

### Prerequisites
- Node.js
- npm

### Setup
```bash
npm install
```

### Build
```bash
npm run build
```

### Run
```bash
npm start
```

### Development (with file watching)
```bash
npm run dev
```

## Project Structure
- `src/main.ts` - Electron main process
- `src/preload.ts` - Electron preload script with YouTube Music controls
- `src/types.ts` - TypeScript type definitions
- `backend/sync_library.py` - Python script for syncing music library
- `dist/` - Compiled JavaScript output (generated)