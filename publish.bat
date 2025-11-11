@echo off
setlocal enabledelayedexpansion

REM Prompt for version number
set /p version="Enter version number (e.g., 0.0.3): "

REM Update package.json version using PowerShell
powershell -Command "(Get-Content package.json -Raw | ConvertFrom-Json | ForEach-Object { $_.version = '%version%'; $_ } | ConvertTo-Json -Depth 10) | Set-Content package.json"

REM Delete old .vsix files
del *.vsix 2>nul

REM Package the extension
npx @vscode/vsce package --no-dependencies

REM Add changes to git
git add .

REM Commit with version message
git commit -m "Release version %version%"

REM Create tag
git tag v%version%

REM Push to main
git push origin main

REM Push the tag to trigger workflow
git push origin v%version%

echo Publication completed for version %version%. Check GitHub Actions for workflow status.
pause
