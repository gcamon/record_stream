if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off
cd "C:\recorded_stream"
start /min cmd start /min cmd /C "node server.js"
goto :EOF
:minimized