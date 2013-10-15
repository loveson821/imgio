var pountations = /[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g
console.log ('\.,-\/#!$%\^&\*;:{}=\-_`~()不是吧'.replace(pountations,"") )

var name = 'http://inx.io/http://inx.io/http://inx.io/http://inx.io/屌講呢啲'
console.log( name.replace(/^.*\/|\.[^.]*$/g, '') )