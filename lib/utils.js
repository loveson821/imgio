
/**
 * Formats mongoose errors into proper array
 *
 * @param {Array} errors
 * @return {Array}
 * @api public
 */

exports.errors = function (errors) {
  var keys = Object.keys(errors)
  var errs = []

  // if there is no validation error, just display a generic error
  if (!keys) {
    console.log(errors);
    return ['Oops! There was an error']
  }

  keys.forEach(function (key) {
    errs.push(errors[key].type)
  })

  return errs
}

/*
 *  short url module
 */
Base62 = require('base62')

exports.shortener = function(seq, cb){
  //thanks https://github.com/juanmaia
  // chars = "abcdefghijklmnopqrstuvxzwyABCDEFGHIJKLMNOPQRSTUVXZWY1234567890";
  // var str
  // while (seq > 0){
  //     var k = seq % chars.length;
  //     if (k==0) { k = 62; seq--; }
  //     seq = Math.floor(seq / chars.length); 
  //     str = chars[k-1];
  // }
  // console.log(seq + ', ' + str)
  // cb(str);
  // var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
  // if(n > 62) {
  //     return num_to_base62(Math.floor(n / 62)) + CHARS[n % 62];
  // } else {
  //     return CHARS[n];
  // }
  cb( Base62.encode(seq) )
}




