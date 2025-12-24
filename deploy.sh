#!/bin/bash

set -e  # 중간에 에러 나면 바로 종료

echo "🧹 dist 폴더 삭제"
rm -rf dist

echo "🏗️  빌드 시작"
npm run build

echo "📄 404.html 생성"
cp dist/index.html dist/404.html

echo "📦 dist 커밋"
git add dist -f
git commit -m "Deploy"

echo "🚀 gh-pages 브랜치로 배포"
git subtree push --prefix dist origin gh-pages

echo "✅ 배포 완료!"
