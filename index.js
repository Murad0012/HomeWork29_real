var bar = document.getElementById("icon");
var sidebar = document.getElementById("jsbar");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
let bool = false

bar.onclick = function(){
    bool = !bool;
    sidebar.style.display = "block";
    if(bool){
        block1.onclick = function(){
            sidebar.style.display = "none";
        }

        block2.onclick = function(){
            sidebar.style.display = "none";
        }
        
    }
}