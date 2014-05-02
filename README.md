MDiMapGeocoder
===============

A library to use [Maryland's cascading geocoder](http://mdimap.us/ArcGIS/rest/services/GeocodeServices/MD.State.MDCascadingLocatorWithZIPCodes/GeocodeServer/) in Node.js and the browser

Use in Node.js

```javascript
npm install mdimapgeocoder

var MDiMapGeocoder = require('mdimapgeocoder')
```

Use in Browser
```html
<script src="MDiMapGeocoder.js"></script>
```

Example
```javascript

var geocoder = new MDiMapGeocoder()

geocoder.search('1101 Camden Ave, Salisbury MD 21801', function(err, res){
  /*
    res.candidates[0] = 
    {
      "address" : "1101 CAMDEN AVE, SALISBURY, MD, 21801",
      "location" : {
        "x" : -75.609389996999937,
        "y" : 38.342533962000061
      },
      "score" : 100,
      "attributes" : {}
    }
  */
})
```

Specify WKID to return
```javascript
var geocoder = new MDiMapGeocoder({
  wkid: 26985 // default 4326
})
```