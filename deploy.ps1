$ErrorActionPreference = "Stop"

$remote = "deployer@217.154.67.144"
$remotePath = "/var/www/massage-hilft.at/"

Write-Host "Build startet..." -ForegroundColor Cyan
npm run build

if (!(Test-Path "dist")) {
    Write-Host "Build fehlgeschlagen!" -ForegroundColor Red
    exit 1
}

Write-Host "Cleanup..." -ForegroundColor Yellow
Start-Process "ssh" -ArgumentList "-n -T $remote rm -rf $remotePath/*" -Wait -NoNewWindow

Write-Host "Upload..." -ForegroundColor Yellow
Start-Process "scp" -ArgumentList "-r dist/* ${remote}:$remotePath/" -Wait -NoNewWindow

Write-Host "Deploy erfolgreich!" -ForegroundColor Green