rm ../*.css
rm ../*.js
rm ../*.png
rm ../*.txt
rm ../*.webmanifest
rm -rf ../page-data
rm -rf ../static
rm -rf ../404
rm -rf ../about
rm -rf ../board
rm -rf ../faq
rm -rf ../reference
rm -rf ../icons
rm -rf ../images
rm -rf public
npx gatsby build
mv -f public/* ../
echo "If you see an error with 'directory not empty', add that directory to the build script"