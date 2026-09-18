let scarry = false;

function updateScarry(){
    if (! scarry) {
        document.getElementById("scarry-body").style.background = 'white';
    }
    else{
        document.getElementById("scarry-body").style.background = 'black';
    }
}

function changeScarry() {
    scarry = ! scarry;
    updateScarry();
}

updateScarry();