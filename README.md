MDiMap-geocoder
===============

A library to use Maryland's cascading geocoder in Node.js and the browser

Use in Node.js

```javascript
var MDiMapGeocoder = require('MDiMapGeocoder')
```

Use in Browser
```html
<script src="MDiMapGeocoder.js"></script>
```

Example
```javascript
MDiMapGeocoder.search('1101 Camden Ave, Salisbury MD 21801', function(err, res){
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