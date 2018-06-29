#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd .docz/dist

# 如果是发布到自定义域名
echo 'docz.lovejade.cn' > CNAME

git init
git add -A
git commit -m 'deploy update 🎉'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/nicejade/docz-web-app.git master:gh-pages
cd -
