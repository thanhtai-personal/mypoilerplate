git push origin master
git branch -D deploy
git checkout -b deploy
git push origin deploy -f
git checkout master