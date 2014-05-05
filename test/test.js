var Geocoder = require('../index.js')
  , test = require("tap").test

var geocoder = new Geocoder()

function cb(err, res){
  console.log(err, res.candidates[0])
}

geocoder.search('1101 Camden Ave, Salisbury MD 21801', cb)
geocoder.search({
  Street: '1101 Camden Ave',
  City: 'Salisbury',
  State: 'MD',
  ZIP: '21801'
}, cb)