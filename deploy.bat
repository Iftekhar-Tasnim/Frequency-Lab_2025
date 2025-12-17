@echo off
echo Building project...
call npm run build

echo Cleaning up previous build...
if exist public_html (
    rmdir /s /q public_html
)
if exist deploy.zip (
    del deploy.zip
)

echo Creating deployment directory...
mkdir public_html

echo Copying files...
copy index.html public_html\
copy "*.txt" public_html\
xcopy /E /I /Y dist public_html\dist
xcopy /E /I /Y assets public_html\assets
xcopy /E /I /Y js public_html\js
xcopy /E /I /Y pages public_html\pages

echo Creating Zip archive...
powershell Compress-Archive -Path public_html -DestinationPath deploy.zip

echo ============================================
echo Deployment package created: deploy.zip
echo Contents are also in: public_html
echo ============================================
pause
