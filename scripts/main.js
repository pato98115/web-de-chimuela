const myHeading = document.querySelector('h1');
let chimueImage = document.querySelector('img');

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
