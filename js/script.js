var height = $( window ).height();
var body = $('body');
var mario_img = $('#mario img');
var bricks = $('#bottomBrick');
$('#background').height(height);
left_value = 0;
// Mario Key Down
body.keydown(function() {
	// Moving Speed
	left_value = left_value-5; 
    mario_img.attr("src","images/mario_walking.gif");
    bricks.css('left',left_value);
    console.log(left_value); 
}).keyup(function(){
    mario_img.attr("src","images/mario.png"); 
});