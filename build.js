var browserify = require('browserify')
  , fs = require('fs')

var b = browserify()
b.add('./index.js')
b.bundle({standalone: 'MDiMapGeocoder'}).pipe(fs.createWriteStream('./MDiMapGeocoder.js'))