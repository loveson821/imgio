
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


exports.shortener = function(seq){
  //thanks https://github.com/juanmaia
  var chars = "abcdefghijklmnopqrstuvxzwyABCDEFGHIJKLMNOPQRSTUVXZWY1234567890";
  while (seq > 0){
      var k = seq % chars.length;
      if (k==0) { k = 62; seq--; }
      seq = Math.floor(seq / chars.length); 
      str = chars[k-1];
  }
  return str;
}

