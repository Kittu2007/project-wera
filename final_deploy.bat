@echo off
setlocal enabledelayedexpansion
echo ==========================================
echo WERA E-Commerce: One-Click Deploy
echo ==========================================

:: Hardcoded paths and variables
set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
set "GITHUB_USER=Kittu2007"
set "REPO_NAME=wera-ecommerce"

if not exist "!GIT_CMD!" (
    echo [ERROR] Git not found at "!GIT_CMD!"
    pause
    exit /b
)

echo [INFO] Using Git: "!GIT_CMD!"
echo [INFO] Deploying to GitHub user: %GITHUB_USER%

:: 1. Initialize & Configure
if not exist .git (
    echo [INFO] Initializing Git...
    "!GIT_CMD!" init
    "!GIT_CMD!" branch -M main
)

:: Configure Identity
"!GIT_CMD!" config user.email "deploy@wera.app"
"!GIT_CMD!" config user.name "Kittu2007"

:: 2. Commit
echo [INFO] Committing files...
"!GIT_CMD!" add .
"!GIT_CMD!" commit -m "Final Deploy"

:: 3. Remote Setup (Reset origin to be sure)
echo [INFO] Setting up remote...
"!GIT_CMD!" remote remove origin >nul 2>nul
"!GIT_CMD!" remote add origin "https://github.com/%GITHUB_USER%/%REPO_NAME%.git"

:: 4. Push
echo [INFO] Pushing to GitHub...
echo [INFO] Please sign in if a window opens.
"!GIT_CMD!" push -u origin main

:: 5. Vercel Deploy
echo [INFO] Starting Vercel Deployment...
call vercel deploy --prod

echo.
echo [SUCCESS] deployment script finished!
pause
