

const firstName = 'Mateusz';
const age = 29;


console.log(`Hej, jestem ${firstName} i już niedługo będę mógł ${age} zrobić dla Ciebie ekstra stronę`)


const empty = document.querySelector('.article');

console.log(empty);


function welcome(firstName, age){
    console.log(`Cześć użytkowniku! Mam na imię ${firstName} i mam ${age} lat`);

}

welcome('Mateusz', 29)


function greet(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;

}

greet('.empty-js', 'Witaj na mojej stronie tworzonej na potrzeby WTF');


const menu = document.querySelector('.menu--js')
menu.addEventListener('click', ()=>{
    const nav = document.querySelector('.transfer--js');
    nav.classList.toggle('transfer--open');
})