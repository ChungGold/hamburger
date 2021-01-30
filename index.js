// Hamburger reveal

//Hamburger variables

const burger = document.getElementById('hamburger');

let pos = 0;

let open = false;

//Hamburger reveal function

function engine() {
    setInterval(unveil, 1);
}

function unveil() {
    if (pos < 200){
        pos++;
        burger.style.height = pos + 'px';
    } else {
        clearInterval();
    }
}

// Icon animation

//Icon movement variables

const button = document.getElementById('nav-button');

let right = 0;

//Icon movement

function move() {
    setInterval(swingRight, 2.35);
}

function swingRight() {
    if (right < 100){
        right++;
        button.style.left = 'calc(50% - 15px + ' + right + 'px)';
    } else {
        clearInterval();
    }
}

//icon bar animation

const lines = document.getElementsByClassName('line');

function fancyX() {
    lines[0].classList.add('one');
    lines[1].classList.add('two');
    lines[2].classList.add('three');
    lines[0].classList.remove('von');
    lines[1].classList.remove('tvo');
    lines[2].classList.remove('thvee');
}


// Closing functions

//Hamburger closing variables

let pos2 = 200;

//Hamburger veil function

function reverseEngine() {
    setInterval(veil, 1);
}

function veil() {
    if (pos2 > 0){
        pos2--;
        burger.style.height = pos2 + 'px';
    } else {
        clearInterval();
    }
}

//icon reverse variables

let left = 100;

// Icon reverse animation

function moveBack() {
    setInterval(swingLeft, 2.35);
}

function swingLeft() {
    if (left > 0){
        left--;
        button.style.left = 'calc(50% - 15px + ' + left + 'px)';
    } else {
        clearInterval();
    }
}

//icon x animation

function fancyNoMore() {
    lines[0].classList.remove('one');
    lines[1].classList.remove('two');
    lines[2].classList.remove('three');
    lines[0].classList.add('von');
    lines[1].classList.add('tvo');
    lines[2].classList.add('thvee');
}

// Event Listener to run functions

button.addEventListener('click',()=> {
    if (open === false){
        engine();
        move();
        fancyX();
        open = true;
    } else if (open === true){
        reverseEngine();
        moveBack();
        fancyNoMore();
        open = false;
    }
});

