@echo off
setlocal enabledelayedexpansion
echo ==========================================
echo WERA E-Commerce: One-Click Deploy (Final)
echo ==========================================

:: Hardcoded settings
set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
set "REPO_URL=https://github.com/Kittu2007/project-wera.git"

if not exist "!GIT_CMD!" (
    echo [ERROR] Git not found at "!GIT_CMD!"
    pause
    exit /b
)

echo [INFO] Using Git: "!GIT_CMD!"
echo [INFO] Target Repo: !REPO_URL!

:: 1. Initialize & Configure
if not exist .git (
    echo [INFO] Initializing Git...
    "!GIT_CMD!" init
    "!GIT_CMD!" branch -M main
)

:: Configure Identity (Required for commit)
"!GIT_CMD!" config user.email "deploy@wera.app"
"!GIT_CMD!" config user.name "Kittu2007"

:: 2. Commit
echo [INFO] Committing files...
"!GIT_CMD!" add .
"!GIT_CMD!" commit -m "Final Deploy to Vercel"

:: 3. Remote Setup
echo [INFO] Setting up remote...
"!GIT_CMD!" remote remove origin >nul 2>nul
"!GIT_CMD!" remote add origin "!REPO_URL!"

:: 4. Push
echo [INFO] Pushing to GitHub...
echo [INFO] Please sign in if a window opens.
"!GIT_CMD!" push -u origin main

:: 5. Vercel Deploy
echo [INFO] Starting Vercel Deployment...
call vercel deploy --prod

echo.
echo [SUCCESS] Deployment script finished!
pause
