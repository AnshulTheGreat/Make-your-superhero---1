/*Then declare variable to store wi
dth and height of the block
Then declare variable to store the 
x and y coordinate of the player image
Then declare 2 empty variables for t
he object of the player and the block image.
Then write the player_update() func
tion, the same way you did in the class. 
In this function, for the player image search
 any good superhero image, if you don’t find 
 any good image then download the following 
 image and use it -
https://drive.google.com/file/d
/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/
view?usp=sharing
Then write the new_image() func
tion, the same way you did in the class */

var canvas = new fabric.Canvas('myCanvas');

block_height = "";
block_width = "";

player_x = 10;
player_y = 10;

player_object = "";
block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);
        block_image_object.set({top:player_y,left:player_x});
        canvas.add(block_image_object);
    });
}
