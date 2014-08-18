MDiMapGeocoder
===============

A library to use [Maryland's cascading geocoder](http://geodata.md.gov/imap/rest/services/GeocodeServices/MD_CompositeLocatorWithZIPCodeCentroids/GeocodeServer) in Node.js and the browser

### Use in Node.js

```javascript
npm install mdimapgeocoder

var MDiMapGeocoder = require('mdimapgeocoder')
```

### Use in Browser
* Download build/MDiMapGeocoder.min.js

```html
<script src="MDiMapGeocoder.min.js"></script>
```

### Example
```javascript

var geocoder = new MDiMapGeocoder()

//Single Line 
geocoder.search('1101 Camden Ave, Salisbury MD 21801', function(err, res){
  // example response
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
})

//Address Fields
geocoder.search({
  Street: '1101 Camden Ave',
  City: 'Salisbury',
  State: 'MD',
  ZIP: '21801'
}, function(err, res){
  
})
```

### Options
* wkid - Specify WKID to return. Default 4326

```javascript
var geocoder = new MDiMapGeocoder({
  wkid: 26985 // return coordinates in MD state plane
})
```