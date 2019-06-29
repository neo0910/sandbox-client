#!/usr/bin/env sh

set -e

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:neo0910/neo0910.github.io.git master

cd -

rm -r -f dist
