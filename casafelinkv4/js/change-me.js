$(document).ready(function(){
	var bgArray = [
        [ 'bg_image_1', 'center center'],
        [ 'bg_image_2', 'center center'],
        [ 'bg_image_3', 'center center'],
        [ 'bg_image_4', 'center center'],
        [ 'bg_image_5', 'center center']
                 ];
    var i = Math.floor(Math.random() * bgArray.length);
    var bg = bgArray[i][0];
    var cls = bgArray[i][1];
    
  var path = 'https://casafelink.github.io/casafelinkv4/img/';

    $('body').css("background-image", "url("+ path + bg +".jpg)");
    $('body').css("background-position", cls);
	
});
