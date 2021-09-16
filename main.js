var canvas = new fabric.Canvas("myCanvas");
player_X = 10;
player_Y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";
player_update() 

function player_update() 
{
 fabric.Image.fromURL("player.png",function(Img){
     player_object = Img;
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
         top:player_Y,
         left:player_X         
     });
     canvas.add(player_object);
 });
}
function block_update(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keyDown);


function my_keyDown(e) 
{
    keypress = e.keyCode;
    console.log(keypress);

    if (e.shiftKey == true && keypress == "80") {
        console.log("shift + p");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("Current_height").innerHTML = block_image_height;
        document.getElementById("Current_width").innerHTML = block_image_width;
    }
    
    if (e.shiftKey == true && keypress == "77") {
        console.log("shift + m");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("Current_height").innerHTML = block_image_height;
        document.getElementById("Current_width").innerHTML = block_image_width;
    }
    if (keypress == "38") 
    {
        up();
        console.log("up");
    }
    if (keypress == "37") 
    {
        left();
        console.log("left");
    }
    if (keypress == "39") 
    {
        right();
        console.log("right");
    }
    if (keypress == "40") 
    {
        down();
        console.log("down");
    }
    if (keypress == "87") 
    {
        block_update("wall.jpg");
        console.log("w is pressed brick block");
    }
    if (keypress == "71") 
    {
        block_update("ground.png");
        console.log("g is pressed grass block");
    }
    if (keypress == "76") 
    {
        block_update("light_green.png");
        console.log("l is pressed green_terracota block");
    }
    if (keypress == "84") 
    {
        block_update("trunk.jpg");
        console.log("t is pressed oak log ");
    
    }
    if (keypress == "82") 
    {
        block_update("roof.jpg");
        console.log("r is pressed nethherack");
    }
    if (keypress == "89") 
    {
        block_update("yellow_wall.png");
        console.log("y is pressed yellow brick block");
    }
    if (keypress == "68") 
    {
        block_update("dark_green.png");
        console.log("d is pressed cactus");
    }
    if (keypress == "85") 
    {
        block_update("unique.png");
        console.log("u is pressed glowstone ");
    }
    if (keypress == "67") 
    {
        block_update("cloud.jpg");
        console.log("c is pressed Accacia log");
    }
    if (keypress == "46") 
    {
        canvas.remove(canvas.getActiveObject());
    }
}

function down() 
{
 if(player_Y < 460) {
     player_Y = player_Y + block_image_height;
     console.log(block_image_height);
     console.log(player_X + " " + player_Y)
     canvas.remove(player_object);
     player_update()
 }
}
function up() 
{
 if(player_Y > 0) {
     player_Y = player_Y - block_image_height;
     console.log(block_image_height);
     console.log(player_X + " " + player_Y)
     canvas.remove(player_object);
     player_update()
 }
}
function left() 
{
 if(player_X > 0) {
     player_X = player_X - block_image_width;
     console.log(block_image_height);
     console.log(player_X + " " + player_Y)
     canvas.remove(player_object);
     player_update()
 }
}
function right() 
{
 if(player_X < 850) {
     player_X = player_X + block_image_width;
     console.log(block_image_height);
     console.log(player_X + " " + player_Y)
     canvas.remove(player_object);
     player_update()
 }
}