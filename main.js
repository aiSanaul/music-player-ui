function copyrights() {
    pop = document.getElementById("crs");

    if(pop.style.display = "none") {
        pop.style.display = "flex";
    }
}

function close() {
    pop = document.getElementById("crs");

    if(pop.style.display = "flex") {
        pop.style.display = "none";
    }
}

function play() {
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none";
}

function pause() {
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
}
