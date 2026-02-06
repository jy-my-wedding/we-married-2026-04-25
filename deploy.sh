#!/bin/bash
set -e

rm -rf dist
npm run build
cp dist/index.html dist/404.html

git add dist -f
git commit -m "Deploy"

echo "🚀 gh-pages 브랜치로 배포 (force)"
git push origin `git subtree split --prefix dist main`:gh-pages --force

echo "✅ 배포 완료!"
