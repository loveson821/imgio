Base62 = require('base62')

var i = 1000
while( i>0 ){
	i--;
	console.log( Base62.encode(i));
}