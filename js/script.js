var height = $( window ).height();
var body = $('body');
var mario_img = $('#mario img');
var bricks = $('#bottomBrick');
$('#background').height(height);
left_value = 0;
// Mario Key Down
body.keydown(function(event) {
	// Moving Speed
	left_value = left_value-3; 
    mario_img.attr("src","images/mario1.png");
    bricks.css('left',left_value);
    console.log(type); 
// Mario Key Up
}).keyup(function(){
    mario_img.attr("src","images/mario.png"); 
});