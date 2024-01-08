const arrowDown = document.querySelector('.arrow-down');
const dropDown = document.querySelector('.dropdown');
const dropDown1 = document.querySelector(".dropdown1");
const arrowDown1 = document.querySelector(".arrow-downs")
const arrowUp = document.querySelector(".arrow-up");
const arrowUp1 = document.querySelector(".arrow-ups")


arrowDown.addEventListener('click', ()=>{
    dropDown.classList.add('active');
    arrowDown.style.display="none";
    arrowUp.style.display="block";
});

arrowUp.addEventListener('click', ()=>{
    dropDown.classList.remove('active');
    arrowDown.style.display="block";
    arrowUp.style.display="none";
});

arrowDown1.addEventListener('click', ()=>{
    dropDown1.classList.add('active');
    arrowDown1.style.display='none';
    arrowUp1.style.display='block';
});

arrowUp1.addEventListener('click', ()=>{
    dropDown1.classList.remove('active');
    arrowDown1.style.display='block';
    arrowUp1.style.display='none';
});

const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const a = document.querySelector('a');
const navbar =document.querySelector('.navbar')
const closeHamburger =document.querySelector('.close-hamburger');

hamburger.addEventListener('click', () =>{
    ul.style.display="block";
    li.style.display="block";
    a.style.display="block";
    navbar.style.display="block";
    closeHamburger.style.display='block';

})
closeHamburger.addEventListener('click', () =>{
    ul.style.display="none";
    li.style.display="none";
    a.style.display="none";
    navbar.style.display="none";
    hamburger.style.display="block";

})












