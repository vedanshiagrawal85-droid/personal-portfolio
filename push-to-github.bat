@echo off
echo ==============================================
echo Pushing Vedanshi's Portfolio to GitHub...
echo ==============================================
git remote remove origin 2>nul
git remote add origin https://github.com/vedanshiagrawal85-droid/personal-portfolio.git
git branch -M main
git push -u origin main
echo.
echo Done! Now go to your Vercel tab and import 'personal-portfolio'.
pause
