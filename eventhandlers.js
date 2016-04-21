var flip = true;
function doThing() {
    //if (e.keyCode == 13) {}
    console.log(flip);
    document.getElementById("elem").innerHTML = flip ? "true" : "False";
    flip = !flip;
}

var el = document.getElementById("elem");
el.addEventListener("click", doThing, false);
