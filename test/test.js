var Geocoder = require('../index.js')
  , test = require("tap").test

var geocoder = new Geocoder()

  geocoder.search('1101 Camden Ave, Salisbury MD 21801', function(err, res){
    console.log(err, res.candidates[0])
  })