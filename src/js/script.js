/*-------------------------------------------- 
[Table of contents]

    1. Nav - Effect
----------------------------------------------*/
/*=============================================
=          START SECTION | Nav Effect         =
Desc: Select element function  
=============================================*/
const selectElement = function (element) { 
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});



