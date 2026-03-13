@echo off
echo ==========================================
echo   TOA IP-A1 Speaker Control
echo ==========================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed.
    echo Please download and install it from https://nodejs.org
    echo.
    pause
    exit /b 1
)

for /f %%v in ('node --version') do set NODEVER=%%v
echo Node.js version: %NODEVER%
echo.

if not exist node_modules (
    echo Installing dependencies... this may take a minute.
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: npm install failed. See above for details.
        pause
        exit /b 1
    )
    echo.
)

if not exist dist\public\index.html (
    echo Building app for the first time... this takes about 30 seconds.
    echo.
    call npx tsx script/build.ts
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Build failed. See above for details.
        echo Try deleting the "dist" folder and running again.
        pause
        exit /b 1
    )
    echo.
    echo Build complete!
    echo.
)

echo Starting server...
echo.
echo Open your browser to:
echo   http://localhost:5000
echo   (The server will also print your LAN address)
echo.
echo Press Ctrl+C to stop the server.
echo ==========================================
echo.

node dist\index.cjs

echo.
echo ==========================================
echo   Server stopped. Press any key to close.
echo ==========================================
echo.
pause
