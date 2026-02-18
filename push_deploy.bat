@echo off
setlocal enabledelayedexpansion
echo ==========================================
echo WERA E-Commerce: Final Deployment Script
echo ==========================================

:: 1. Hardcoded Git Path
set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"

if not exist "!GIT_CMD!" (
    echo [ERROR] Git not found. Please install Git manually.
    pause
    exit /b
)

:: 2. Initialize & Configure Git
echo.
echo [INFO] Preparing Repository...
"!GIT_CMD!" init

:: Fix for "Author identity unknown" error
"!GIT_CMD!" config user.email "deploy@wera.app"
"!GIT_CMD!" config user.name "Wera Deployer"

"!GIT_CMD!" branch -M main

:: 3. Stage & Commit
echo.
echo [INFO] committing files...
"!GIT_CMD!" add .
"!GIT_CMD!" commit -m "Initial_Deploy"

:: 4. Add Remote
echo.
echo [INFO] Configuring GitHub Remote for 'wera-ecommerce'...
set /p GITHUB_USER="Enter your GitHub Username: "

"!GIT_CMD!" remote remove origin >nul 2>nul
"!GIT_CMD!" remote add origin "https://github.com/!GITHUB_USER!/wera-ecommerce.git"

:: 5. Push
echo.
echo [INFO] Pushing to GitHub...
echo [INFO] A browser window may open to sign in.
echo [INFO] If it fails, check your username or internet connection.
"!GIT_CMD!" push -u origin main

:: 6. Deploy
echo.
echo [INFO] Deploying to Vercel...
call vercel deploy --prod

echo.
echo [SUCCESS] Process Complete!
pause
