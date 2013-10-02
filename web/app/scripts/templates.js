this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/alert.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-error">\n<a href="#" class="close">&times;</a>\n<strong>Oops!</strong> ' +
((__t = ( message )) == null ? '' : __t) +
'\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/clipboard.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal fade" id="clipboardModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n\n<div class="overlay">\n\t<div class="content">\n\t\t<a class="clearfix"><img src="' +
((__t = ( path )) == null ? '' : __t) +
'"></img>\n\t\t</a>\n\t\t<h4 class="">' +
((__t = ( name )) == null ? '' : __t) +
'.jpg</h4>\n\n\t\t<ul class="text-left">\n\t\t\t<li>\n\t\t\t\t<h4>Short link</h4>\n\t\t\t\t<a id="a-short-link" data-clipboard-text="' +
((__t = ( permalink )) == null ? '' : __t) +
'">\n\t\t\t\t\t' +
((__t = ( permalink )) == null ? '' : __t) +
'\n\t\t\t\t\t<div class="copy-overlay">\n\t\t\t\t\t\t<p>Copy to clipboard</p>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h4>Blogger, Forum link</h4>\n\t\t\t\t<a id="a-blog-fourm" data-clipboard-text="[img]' +
((__t = ( permalink )) == null ? '' : __t) +
'[/img]">\n\t\t\t\t\t[img]' +
((__t = ( permalink )) == null ? '' : __t) +
'[/img]\n\t\t\t\t\t<div class="copy-overlay">\n\t\t\t\t\t\t<p>Copy to clipboard</p>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h4>HTML Image Tag</h4>\n\t\t\t\t<a id="a-html-tag" data-clipboard-text="&lt;img src=&quot;' +
((__t = ( permalink )) == null ? '' : __t) +
'&quot; &#47;&gt;">\n\t\t\t\t\t&lt;img src=&quot;' +
((__t = ( permalink )) == null ? '' : __t) +
'&quot; &#47;&gt;\n\t\t\t\t\t<div class="copy-overlay">\n\t\t\t\t\t\t<p>Copy to clipboard</p>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n</div>\n\n</div><!-- /.modal -->';

}
return __p
};

this["JST"]["app/scripts/templates/footer.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>Your content here.</p>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/hotest.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n<ul id="hotests-one" class="og-grid clearfix picturelist"></ul>\n\n</div>\n\n<footer role="contentinfo" class="text-center">\n    <nav role="navigation">\n        <ul>\n            <li><a href="#">Blog</a></li>\n            <li><a href="#">InSight</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n    </nav>      \n    <p>Copyright © 2013 Friday Creation Ltd. All rights reserved.</p>\n</footer>           ';

}
return __p
};

this["JST"]["app/scripts/templates/navigator.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<nav class="navbar navbar-default  navbar-static-top" role="navigation">            \n\t<!-- Brand and toggle get grouped for better mobile display -->\n\t<div class="navbar-header">\n\t  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex8-collapse">\n\t    <span class="sr-only">Toggle navigation</span>\n\t    <span class="icon-bar"></span>\n\t    <span class="icon-bar"></span>\n\t    <span class="icon-bar"></span>\n\t  </button>\n\t</div>\n\n\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t<div class="collapse navbar-collapse navbar-ex8-collapse">\n\t  <ul class="nav navbar-nav">\n\t    <li class="active"><a href="#">Home</a></li>\n\t    <li class="recent-menu"><a href="#recent" >Recent</a></li>\n\t    <li class="hotest-menu"><a href="#hotest" >Hotest</a></li>\n\t    \n\t  </ul>\n\t    <ul class="nav navbar-nav pull-right">\n\t    ';
 if(user){ ;
__p += '\n\t\t\t<li><a href="#">' +
((__t = ( user.email )) == null ? '' : __t) +
'</a></li>\n\t\t\t<li><a href="#" id="logout">Logout</a></li>\n\t\t';
 }else{ ;
__p += '\n\t    \t<li><a data-toggle="modal" href="#SignInModal" data-bypass>Sign In</a></li>\n\t    ';
 };
__p += '\n\t  </ul>\n\t</div><!-- /.navbar-collapse -->\n</nav>\n';

}
return __p
};

this["JST"]["app/scripts/templates/picture.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="' +
((__t = ( path )) == null ? '' : __t) +
'" data-largesrc="' +
((__t = ( path )) == null ? '' : __t) +
'" data-title="' +
((__t = ( name )) == null ? '' : __t) +
'" data-description="' +
((__t = ( permalink )) == null ? '' : __t) +
'" data-clipboard-text="' +
((__t = ( path )) == null ? '' : __t) +
'">\n\t<img src="' +
((__t = ( path )) == null ? '' : __t) +
'"/>\n</a>\n<div class="title"><strong>' +
((__t = ( permalink )) == null ? '' : __t) +
'</strong></div>\n<p class="muted detail">Upload by <span>ku4ncheang</span></p>';

}
return __p
};

this["JST"]["app/scripts/templates/pictures.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( name == "recents"){ ;
__p += '\n\t\n\t<div class="page-header">\n\t    <div class="content clearfix">\n\t        <h3 id="pull-left"><i class="icon-gittip" style="color:#B228AE;"></i>Just On The Fly<span></span></h3>\n\t        <a href="#recent"><button class="pull-right btn btn-purple more"><i class="icon-th"> </i>More</button></a>\n\t    </div>\n\t</div>\n\t<ul id="recents" class="og-grid clearfix picturelist"></ul>\n\n';
 } else { ;
__p += '\n\n\t<div class="page-header">\n\t\t<div class="content clearfix">\n\t\t    <h3 id="pull-left"><i class="icon-rocket" style="color:#B228AE"></i>Hotest<span></span></h3>\n\t\t    <a href="#hotest"><button class="pull-right btn btn-purple more"><i class="icon-th"> </i>More</button></a>\n\t\t</div>\n\t</div>\n\t<ul id="hotests" class="og-grid clearfix picturelist"></ul>\n\n';
 } ;


}
return __p
};

this["JST"]["app/scripts/templates/recent.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n<ul id="recents-one" class="og-grid clearfix picturelist"></ul>\n\n</div>\n\n<footer role="contentinfo" class="text-center">\n    <nav role="navigation">\n        <ul>\n            <li><a href="#">Blog</a></li>\n            <li><a href="#">InSight</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n    </nav>      \n    <p>Copyright © 2013 Friday Creation Ltd. All rights reserved.</p>\n</footer>           ';

}
return __p
};

this["JST"]["app/scripts/templates/search.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="bar">\n    <input type="text" id="searchInput" placeholder="Type some text...">\n    <ul id="searchs" class="og-grid clearfix picturelist"></ul>\n\n</div>\n\n<footer role="contentinfo" class="text-center">\n    <nav role="navigation">\n        <ul>\n            <li><a href="#">Blog</a></li>\n            <li><a href="#">InSight</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n    </nav>      \n    <p>Copyright © 2013 Friday Creation Ltd. All rights reserved.</p>\n</footer>           ';

}
return __p
};

this["JST"]["app/scripts/templates/sidebar.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="cbp-vimenu">\n    <li>\n        <a href="#" class="icon icon-logo">Logo</a>\n    </li>\n    <li>\n        <a data-toggle="modal" href="#shareModal" rel="tooltip" class="icon-share-alt" data-placement="right" title="Share dialogue image" data-bypass></a>\n    </li>\n    <li>\n        <a href="#search" class="icon-search" rel="tooltip" data-toggle="tooltip" data-placement="right" title="Search image" data-original-title="Tooltip on right"></a>\n    </li>\n    <li>\n        <a href="#" class="icon-picture" rel="tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="Browse"></a>\n    </li>\n    <!-- <li class="cbp-vicurrent"><a href="#" class="icon-pencil">Pencil</a></li> -->\n    <li>\n        <a href="#" class="icon icon-archive" rel="tooltip" data-placement="right" data-toggle="tooltip" title="My collection"></a>\n    </li>\n    <li>\n        <a href="#" class="icon-user" rel="tooltip" data-placement="right" data-toggle="tooltip" title="first tooltip">User</a>\n    </li>\n    \n</ul>\n\n<!-- Modal -->\n<div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n<div class="modal-dialog">\n  <div class="modal-content">\n    <div class="modal-header">\n      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n      <h4 class="modal-title">Share dialogue image</h4>\n    </div>\n    <div class="modal-body">\n    <form role="form">\n      <div class="form-group">\n                <label for="shareImageURL">Image url</label>\n                <input type="text" class="form-control" id="shareImageURL" placeholder="http://example.com/image.jpg">\n\n                <label for="shareImageName">Image Name</label>\n                <input type="text" class="form-control" id="shareImageName" placeholder="圖片的對白">\n              </div>\n    </div>\n    </p>\n    <div class="modal-footer">\n      <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>\n      <button type="submit" class="btn btn-purple">Share</button>\n    </div>\n    </form>\n  </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n</div><!-- /.modal -->';

}
return __p
};

this["JST"]["app/scripts/templates/signUp.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-8">\n    <h1>Share Dialogue Image</h1>\n    <p>\n        Let an image speaks what you want to say<br/>it is easier to express\n    </p>\n</div>\n<div class="col-md-4">\n<h3>Sign Up <span>Make you collection<span></h3>\n<form role="form">\n  <div class="form-group">\n    <input type="username" class="form-control" id="username" placeholder="Name">\n    <input type="email" class="form-control" id="email" placeholder="Enter email">\n    <input type="password" class="form-control" id="password" placeholder="Password">\n    <input type="password" class="form-control" id="password-confirm" placeholder="Password Again">\n  </div>\n  <div class="divider">\n  </div>\n  <button type="submit" class="btn btn-purple btn-block">Submit</button>\n</form>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/signinModal.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Modal -->\n<div class="modal fade" id="SignInModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n<div class="modal-dialog">\n<div class="modal-content">\n    <div class="modal-header">\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\n    \n    <h4 class="modal-title">Sign In</h4>\n    \n    \n    </div>\n    <form id="signIn-form" role="form">\n    <div class="form-group">\n        <div class="modal-body">\n        <input type="email" class="form-control" id="email" placeholder="Enter email">\n        <input type="password" class="form-control" id="password" placeholder="Password">\n        </div>\n    </div>\n    <div class="divider"></div>\n    <button type="submit" class="btn btn-purple btn-block">Submit</button>\n    </form>\n</div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n</div><!-- /.modal -->';

}
return __p
};