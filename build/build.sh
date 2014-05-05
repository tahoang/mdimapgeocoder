#!/bin/bash

browserify -x http -s MDiMapGeocoder ../index.js -o ./MDiMapGeocoder.js
uglifyjs ./MDiMapGeocoder.js -o ./MDiMapGeocoder.min.js