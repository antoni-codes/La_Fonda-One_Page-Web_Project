/*-------------------------------------------- 
[Table of contents]

    A. Nav - Side Display

    B. Animations
----------------------------------------------*/

/*********************************************
A. Nav - Side Display
Description: Select element function  
*********************************************/

const selectElement = function (element) { 

    return document.querySelector(element);

};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {

    body.classList.toggle('open');

});

/************** END OF | Nav - Side Display  **************/

/*********************************************
B. Section
*********************************************/
window.sr = ScrollReveal({ reset: true });

sr.reveal('.animate-left', {

    origin: 'left',
    duration: '1000', //Duration of animation
    distance: '25rem', //Traveling From
    delay: 300,//How long it should it take

});


sr.reveal('.animate-right', {

    origin: 'right',
    duration: '1000', //Duration of animation
    distance: '25rem', //Traveling From
    delay: 600,//How long it should it take

});

sr.reveal('.animate-top', {

    origin: 'top',
    duration: '1000', //Duration of animation
    distance: '25rem', //Traveling From
    delay: 600,//How long it should it take

});

sr.reveal('.animate-bottom', {

    origin: 'bottom',
    duration: '1000', //Duration of animation
    distance: '25rem', //Traveling From
    delay: 600,//How long it should it take

});

/************** END OF | section  **************/

