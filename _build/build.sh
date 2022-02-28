rm ../*.css
rm ../*.js
rm ../*.png
rm ../*.txt
rm ../*.webmanifest
rm -rf ../page-data
rm -rf ../static
rm -rf public
npx gatsby build
mv -f public/* ../