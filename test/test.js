var Geocoder = require('../index.js')
  , test = require("tap").test

var geocoder = new Geocoder()

test('single line search test', function(t){
  geocoder.search('1101 Camden Ave, Salisbury MD 21801', function(err, res){
    console.log(res.candidates[0])
    t.ok(res.candidates.length > 0, 'candidates exist')
    t.end()
  })
})
