let myHeading = document.querySelector('h1');
let subHeading = document.querySelector('h2');
let chimueImage = document.querySelector('img');
let nameButton = document.querySelector('button');

function setUserName() {
    let userName = prompt('Me dices tu nombre, por favor?');
    localStorage.setItem('name', userName);
    subHeading.textContent = `Bienvenido a mi página ${userName}!`;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    subHeading.textContent = `Bienvenido a mi página ${storedName}!`;
}

chimueImage.onclick = () => {
    let imgSrc = chimueImage.getAttribute('src');
    if (imgSrc === 'images/chimue-1er-plano.jpeg') {
        chimueImage.setAttribute(
            'src',
            'images/chimue-acostada-al-lado-del-futon.jpeg'
        );
        myHeading.textContent = 'Pues me acuesto';
    } else {
        chimueImage.setAttribute('src', 'images/chimue-1er-plano.jpeg');
        myHeading.textContent = 'Sentada arriba de mi mamá <3';
    }
};

nameButton.onclick = function () {
    setUserName();
};
