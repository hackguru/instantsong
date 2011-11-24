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
				$("#player").html('<object width="250" height="40" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="gsSong'+data+'" name="gsSong'+data+'"><param name="movie" value="http://grooveshark.com/songWidget.swf" /><param name="wmode" value="window" /><param name="allowScriptAccess" value="always" /><param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+data+'&style=metal&p=1" /><!--[if !IE]>--><object type="application/x-shockwave-flash" data="http://grooveshark.com/songWidget.swf" width="250" height="40"><param name="wmode" value="window" /><param name="allowScriptAccess" value="always" /><param name="flashvars" value="hostname=cowbell.grooveshark.com&songIDs='+data+'&style=metal&p=1" /></object><!--<![endif]--></object>');
			});
		}, 500));
	});
});
