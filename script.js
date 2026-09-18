let scarry = false;

function changeScarry() {
    scarry = ! scarry;
    if (scarry) {
        document.getElementById("scarry-body").style.background = 'white';
    }
    else{
        document.getElementById("scarry-body").style.background = 'black';
    }
}