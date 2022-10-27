canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images = ["nasa_image_1.jpg", "nasa_image_2.jpg","nasa_image_3.jpg", "nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

rover_width = 100;
rover_height = 90;

background_image = mars_images[random_number];
console.log(background_image);

rover_image = "rover.png";

rover_x = 20;
rover_y = 20;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadbg;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadbg(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when you pressed the up arrow, x = " + rover_x + "y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("when you pressed the down arrow, x = " + rover_x + "y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function left(){
    if(rover_y >= 0){
        rover_x = rover_x - 10;
        console.log("when you pressed the left arrow, x = " + rover_x + "y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("when you pressed the up arrow, x = " + rover_x + "y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}