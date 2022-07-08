#!/usr/bin/env bash
cp LICENSE.txt README.md dist/

rm potato-clock.zip
(cd dist/ && zip -r potato-clock *)
mv dist/potato-clock.zip .