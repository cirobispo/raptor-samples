#!/bin/bash
./node_modules/.bin/optimizer style.less --main main.js --inject-into my-page.html --plugins optimizer-less --development

echo
echo "Open my-page.html in your web browser to see the result"