var url = require('url')

function MDiMapGeocoder(options) {
  this.address_fields = ['Street', 'City', 'State', 'ZIP']

  this.options = {
    browser: false,
    wkid: 4326,
    get_url: {
      protocol: 'http:',
      host: 'geodata.md.gov',
      pathname: 'imap/rest/services/GeocodeServices/MD_CompositeLocatorWithZIPCodeCentroids/GeocodeServer/findAddressCandidates'
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
}

MDiMapGeocoder.prototype.search = function(term, next) {
  var query = {
    outSR: this.options.wkid,
    f: 'json'
  }

  if(typeof term === 'string') {
    query.SingleLine = term
  } else if(typeof term === 'object') {
    for(var i = 0; i < this.address_fields.length; i++){
      var field = this.address_fields[i]
      if(term[field]) {
        query[field] = term[field]
      }
    }
  }

  var get_url = this.options.get_url
  get_url.query = query

  if(this.options.browser){
    this.browserGet(get_url, next)
  } else {
    this.nodeGet(get_url, next)
  }
}

MDiMapGeocoder.prototype.browserGet = function(get_url, next) {
  get_url.query.callback = '_MDiMapGeocoder_cb'
  window._MDiMapGeocoder_cb = function(data){
    next(null, data)
  }
  get_url = url.format(get_url)

  var script = document.createElement('script')
  script.onload = function() {
    document.head.removeChild(this)
  }
  script.src = get_url
  document.getElementsByTagName('head')[0].appendChild(script)
}

MDiMapGeocoder.prototype.nodeGet = function(get_url, next) {
  get_url = url.format(get_url)
  console.log(get_url)
  http.get(get_url, function(res){
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


module.exports = MDiMapGeocoder