var geocoder = require('../index.js')
  , test = require("tap").test

test('single line search test', function(t){
  geocoder.search('1101 Camden Ave, Salisbury MD 21801', function(err, res){
    t.ok(res.candidates.length > 0, 'candidates exist')
    t.end()
  })
})
