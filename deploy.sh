#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# commit to github.io
git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/robsel118/robsel118.github.io.git master

cd -