@echo off
setlocal enabledelayedexpansion
echo ==========================================
echo WERA E-Commerce Deployment Script (Final)
echo ==========================================

:: 1. HARDCODED GIT PATH (Found in Program Files)
set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"

if not exist "!GIT_CMD!" (
    echo [ERROR] Git not found at: "!GIT_CMD!"
    echo Please install Git or check the path.
    pause
    exit /b
)

echo [INFO] Using Git at: "!GIT_CMD!"

:: 2. Initialize Git
if not exist .git (
    echo [INFO] Initializing Git repository...
    "!GIT_CMD!" init
    "!GIT_CMD!" branch -M main
)

:: 3. Add files
echo [INFO] Staging files...
"!GIT_CMD!" add .

:: 4. Commit
echo [INFO] Committing changes...
"!GIT_CMD!" commit -m "Deploy to Vercel"

:: 5. Add Remote
echo.
echo [INFO] Configuring GitHub Remote...
set /p GITHUB_USER="Enter your GitHub Username: "
"!GIT_CMD!" remote remove origin >nul 2>nul
"!GIT_CMD!" remote add origin "https://github.com/!GITHUB_USER!/wera-ecommerce.git"

:: 6. Push
echo [INFO] Pushing to GitHub...
echo [INFO] If a browser window opens, please sign in.
"!GIT_CMD!" push -u origin main

:: 7. Deploy to Vercel
echo.
echo [INFO] Deploying to Vercel...
call vercel deploy --prod

echo.
echo [SUCCESS] Deployment script finished.
pause
