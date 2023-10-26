var bar = document.getElementById("icon");
var sidebar = document.getElementById("jsbar");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
let bool = false

bar.onclick = function(){
    bool = !bool;
    sidebar.style.transform = "translateX(0px)";
}