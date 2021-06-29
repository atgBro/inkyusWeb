function validPath(id){
    var paths = document.getElementsByClassName('path');
    for (let p of paths) {
        if (p.id == id){
            if (p.classList.contains("onFocus")){
                p.classList.remove("onFocus");
            } else {
                p.classList.add("onFocus");
                document.getElementById("popUpConfirmPath").classList.remove("hidden");
            }
        }
        else{p.classList.remove("onFocus");}
    };
    
}
function cleanFocusOnPath(){
    var paths = document.getElementsByClassName('path');
    for (let p of paths) {
        p.classList.remove("onFocus");
    };
}