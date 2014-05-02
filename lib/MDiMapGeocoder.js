var url = require('url')

function MDiMapGeocoder(options) {
  var self = this
  console.log('asdfasdfasdfasdf')
  this.options = {
    browser: false,
    wkid: 4326,
    geo_url: {
      protocol: 'http:',
      host: 'mdimap.us',
      pathname: 'ArcGIS/rest/services/GeocodeServices/MD.State.MDCascadingLocatorWithZIPCodes/GeocodeServer/findAddressCandidates'
    }
  }

  if(options) {
    for(var option in options){
      this.options[option] = options[option]
    }
  }

  if (process.title === 'node') {
    this.options.browser = false
    http = require('http')
  } else {
    this.options.browser = true
  }
  console.log(this.options.browser)
  this.search = function(term, next){
    var query = {
      SingleLine: term
      , outSR: self.options.wkid
      , f: 'pjson'
    }
    var geo_url = self.options.geo_url
    geo_url.query = query
    if(self.options.browser){
      self.callback = next
      window._MDiMapGeocoder = self
      var script = document.createElement('script')
      geo_url.query.callback = '_MDiMapGeocoder.browserReturn'
      geo_url = url.format(geo_url)
      script.src = geo_url
      document.getElementsByTagName('head')[0].appendChild(script)
    } else {
      geo_url = url.format(geo_url)
      http.get(geo_url, function(res){
        var data = ''
        res.on("data", function(chunk) {
          data += chunk
        })
        res.on('end', function(err){
          if(err) {
            next(err)
            return
          } else {
            var obj = JSON.parse(data)
            next(null, obj)
          }
        })
      })
    }
  }

  this.browserReturn = function(data){
    self.callback(null, data)
  }
}

module.exports = MDiMapGeocoder