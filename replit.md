# TOA IP-A1 Speaker Control Interface

## Overview
A simple, clean web control interface for TOA IP-A1 network speakers, designed for classroom use. Teachers can adjust volume, mute/unmute, and use preset volume levels from any browser on the school network.

## Architecture
- **Frontend**: React + TypeScript with Tailwind CSS and shadcn/ui components
- **Backend**: Express.js proxy server that handles Digest Authentication to the TOA IP-A1 speakers
- **No database**: Speaker credentials stored in browser localStorage

## How It Works
1. Teacher enters speaker IP address, username, and password on the setup screen
2. Credentials are saved in localStorage for convenience
3. Frontend sends requests to the Express backend proxy
4. Backend proxies requests to the TOA IP-A1 speaker with Digest Authentication
5. Speaker responds and the UI updates

## Key Files
- `client/src/pages/home.tsx` - Main page with ConnectionSetup and ControlPanel components
- `server/routes.ts` - Backend proxy routes with Digest Authentication implementation
- `shared/schema.ts` - Shared TypeScript types and Zod schemas

## API Proxy Routes
- `POST /api/speaker/status` - Get current volume, mute state, and model info
- `POST /api/speaker/volume/set` - Set master volume (0-61)
- `POST /api/speaker/volume/increment` - Increment volume by 1
- `POST /api/speaker/volume/decrement` - Decrement volume by 1
- `POST /api/speaker/mute/set` - Set mute/unmute state

## TOA IP-A1 API Reference
- Volume range: 0 (Mute) to 61 (0 dB), initial setting: 31 (-30 dB)
- Authentication: HTTP Digest Authentication
- API endpoint format: `http://<ip>/api/v2/<category>/<command>?params`
- Volume commands: get_master, set_master, inc_master, dec_master
- Mute commands: get_master_mute, set_master_mute
