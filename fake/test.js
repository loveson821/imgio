var googl = require('goo.gl');

// Shorten a long url and output the result
googl.shorten('http://www.google.com/', function (shortUrl) {
    console.log(shortUrl);
});
