console.log("Début du jeu !");

x = 40;
pos = 0;
dx = 0;
dy = 0;
t = -50;
y = 170;
sign = '';

//Déplacements :
const onKeyDown = function (event) {
    switch (event.keyCode) {
        case 38: // up
            console.log('up');
            break;
        case 37: // left
            console.log('left');
            break;
        case 40: // down
            console.log('down');
            break;
        case 39: // right$
            console.log('right');
            break;
    }
};

var onKeyUp = function (event) {
    switch (event.keyCode) {
        case 38: // up
            console.log('up');  
            break;
        case 37: // left
            console.log('left');
            break;
        case 40: // down
        console.log('down');
            break;
        case 39: // right
            console.log('right');
            break;
    }
};
document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);