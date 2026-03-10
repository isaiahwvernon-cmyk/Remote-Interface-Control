# TOA IP-A1 Speaker Control Interface

## Overview
A standalone HTML file that lets teachers control TOA IP-A1 classroom speakers from any web browser. No server needed — just open the file locally.

## Architecture
- `client/public/speaker-control.html` — The standalone, self-contained HTML file with all CSS and JS inline. This is the main deliverable.
- The React app at `/` serves as a landing page with download instructions and a link to open the HTML file.

## How It Works
1. Teacher opens `speaker-control.html` in a browser on the school network
2. Enters speaker IP address, username, and password
3. The browser communicates directly with the TOA IP-A1 speaker via HTTP (fetch API)
4. Browser handles Digest Authentication natively via the 401 challenge-response
5. Credentials are saved in localStorage for convenience

## Key Features
- Volume slider with circular percentage display
- Plus/minus buttons for fine adjustment
- Mute/unmute toggle
- Preset buttons: Low (15), Normal (31), Loud (48)
- Connection status indicator
- Auto-polling every 10 seconds
- Smart error handling (single notification on connection loss)

## TOA IP-A1 API Reference
- Volume range: 0 (Mute) to 61 (0 dB), initial: 31 (−30 dB)
- Authentication: HTTP Digest Authentication
- GET /api/v2/volume/get_master — Get current volume
- GET /api/v2/volume/set_master?volume=N — Set volume
- GET /api/v2/volume/inc_master — Increment volume
- GET /api/v2/volume/dec_master — Decrement volume
- GET /api/v2/volume/get_master_mute — Get mute state
- GET /api/v2/volume/set_master_mute?mute_state=mute|unmute — Set mute
