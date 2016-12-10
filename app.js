var a = document.getElementById("ball");
 a.style.position = "relative";
var top = 0;
var left = 0;
function moveUp() {
    top -= 25;
    a.style.top = top + "px";
    console.log("up");
}
function moveDown () {
     top += 25; 
      a.style.top = top +"px";
      console.log("down");
}
function gif() {
    left -= 25;
    a.style.left= left +"px";
    console.log("left");
}
function pif() {
    left += 25;
    a.style.left= left + "px";
    console.log("right");
}











