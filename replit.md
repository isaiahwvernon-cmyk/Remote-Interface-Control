# TOA IP-A1 Speaker Control Interface

## Overview
A web interface for controlling multiple TOA IP-A1 classroom speakers. Teachers can add rooms, name them, and control each speaker's volume from any browser on the school network.

## Architecture
- **Frontend**: React + TypeScript with Tailwind CSS and shadcn/ui components
- **Backend**: Express.js proxy that handles Digest Authentication to speakers
- **Storage**: Rooms saved in browser localStorage (no database needed)
- **Cross-platform**: Includes start.bat (Windows) and start.sh (Mac/Linux) for local running

## Key Features
- Multi-room management (add/edit/remove rooms, unlimited)
- Room tiles UI (tablet-friendly grid layout)
- Per-room volume control: slider, +/- buttons, presets (Low/Normal/Loud)
- Mute/unmute per speaker
- Auto-polling for status updates every 10 seconds
- Smart error handling (single toast on connection loss, reconnect notification)

## Key Files
- `client/src/pages/home.tsx` - Main page: RoomList, AddRoomDialog, ControlPanel
- `server/routes.ts` - Backend proxy with Digest Authentication
- `shared/schema.ts` - Shared TypeScript types (Room, SpeakerStatus, SpeakerConnection)
- `start.bat` / `start.sh` - Local startup scripts for Windows / Mac / Linux

## API Proxy Routes
- `POST /api/speaker/status` - Get volume, mute state, model info
- `POST /api/speaker/volume/set` - Set master volume (0-61)
- `POST /api/speaker/volume/increment` - Increment volume
- `POST /api/speaker/volume/decrement` - Decrement volume
- `POST /api/speaker/mute/set` - Set mute/unmute state

## TOA IP-A1 API
- Volume: 0 (Mute) to 61 (0 dB), initial: 31 (-30 dB)
- Auth: HTTP Digest Authentication
- Endpoints: GET /api/v2/volume/{get_master,set_master,inc_master,dec_master,get_master_mute,set_master_mute}
