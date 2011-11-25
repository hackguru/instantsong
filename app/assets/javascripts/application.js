// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function () {
	$("#q")
	.data('timeout', null)
	.keyup(function(){
		clearTimeout($(this).data('timeout'));
		$(this).data('timeout', setTimeout(function () {
			$.getJSON('main/song_id.json?'+$("#q").serialize(), function(data) {
				$("#player").html(
					'<object width="250" height="250" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="gsManySongs" name="gsManySongs">'+
					'<param name="movie" value="http://grooveshark.com/widget.swf" />'+
					'<param name="wmode" value="window" />'+
					'<param name="allowScriptAccess" value="always" />'+
					'<param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+data+'&bbg=1f2021&bth=1f2021&pfg=1f2021&lfg=1f2021&bt=FFFFFF&pbg=FFFFFF&pfgh=FFFFFF&si=FFFFFF&lbg=FFFFFF&lfgh=FFFFFF&sb=FFFFFF&bfg=666666&pbgh=666666&lbgh=666666&sbh=666666&p=1" />'+
					'<!--[if !IE]>-->'+
					'<object type="application/x-shockwave-flash" data="http://grooveshark.com/widget.swf" width="250" height="250">'+
					'<param name="wmode" value="window" />'+
					'<param name="allowScriptAccess" value="always" />'+
					'<param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+data+'&bbg=1f2021&bth=1f2021&pfg=1f2021&lfg=1f2021&bt=FFFFFF&pbg=FFFFFF&pfgh=FFFFFF&si=FFFFFF&lbg=FFFFFF&lfgh=FFFFFF&sb=FFFFFF&bfg=666666&pbgh=666666&lbgh=666666&sbh=666666&p=1" />'+
					'</object>'+
					'<!--<![endif]-->'+
					'</object>'
					);
			});
		}, 800));
	});
});


