var height = $(window).height();
var body = $('body');
var mario_img = $('#mario img');
var bricks = $('#bottomBrick');
var bg_nature = $('#bg_nature');
$('#background').height(height);
left_value = 0;
// Mario Key Down
body.keydown(function(event) {
    var keyCode = event.keyCode;
    // var keyVal = event.key;
    // Moving Speed
    mario_img.attr("src", "images/mario1.png");
    switch (keyCode) {
        case 37:
            //Moving Left
            if (left_value < 0) {
                left_value = left_value + 3;
                bricks.css('left', left_value);
                bg_nature.css('left', left_value);
                console.log('left');
            } else {
                console.log('Reached maximum');
            }
            break;
        case 38:
            //Moving Up
            console.log('Up'); 
            break;
        case 39:
            // Moving Right
            left_value = left_value - 3;
            bricks.css('left', left_value);
            bg_nature.css('left', left_value);
            console.log('Right');
            break;
        case 40:
            //Moving Up
            console.log('Down');
            break;
        default:
            console.log('Just Use your Keyboard arrow to Move Mario!')
    }
    // Mario Key Up
}).keyup(function() {
    mario_img.attr("src", "images/mario.png");
});
