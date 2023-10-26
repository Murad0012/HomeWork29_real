var bar = document.getElementById("icon");
var sidebar = document.getElementById("jsbar");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
let bool = false

bar.onclick = function(){
    bool = !bool;
    sidebar.style.transform = "translateX(0px)";
}

block1.onclick = function(){
    if(bool){
        sidebar.style.transform = "translateX(-300px)";
    }
    bool = !bool;
}


block2.onclick = function(){
    if(bool){
        sidebar.style.transform = "translateX(-300px)";
    }
    bool = !bool;

}