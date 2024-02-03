window.onload = displayImage;
var imagesArray = ["anime1.jpg", "anime6.jpg","anime10.jpg", "anime11.jpg", "anime12.jpg", "anime15.jpg", "anime16.gif", "anime17.jpg"];
function displayImage() {
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}
