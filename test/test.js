var MDiMapGeocoder = require('../index.js')
  , test = require("tap").test

function cb(err, res){
  console.log(err, res.candidates[0])
}

MDiMapGeocoder.search('1101 Camden Ave, Salisbury MD 21801', cb)
MDiMapGeocoder.search({
  Street: '1101 Camden Ave',
  City: 'Salisbury',
  State: 'MD',
  ZIP: '21801'
}, cb)