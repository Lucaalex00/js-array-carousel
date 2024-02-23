/* document.writeln('ciao') */

//Lista immagini
const imgList = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

//Valore "i" dell'immagine "attiva"
let activeImg = 0;

//Variabili da documento
let contentElement = document.querySelector('.content');
let upArrowElement = document.querySelector('.up');
let downArrowElement = document.querySelector('.down');

console.log(contentElement) //DEBUG
console.log(upArrowElement) //DEBUG
console.log(downArrowElement) //DEBUG

//Generiamo dinamicamente le immagini nel JS
for (let i = 0; i < imgList.length; i++) { //CICLO FOR
    const imgListIndex = imgList[i]; //CREO UNA CONSTANTE 
    let dinamicImg = `<img class=${i === activeImg ? 'active' : ''} src=./assets/img/${imgListIndex} alt='img'`
    //Creo una variabile con all'interno un immagine (formato html) con una classe 'active' che verrà assegnata all'elemento con valore di "i" (INDICE) che cambia in ogni ciclo for (partendo dal valore di "activeImg = 0") a cui diamo come valore SRC (percorso) l'indice della array equivalente al valore di "i" (ad ogni ciclo)

    console.log(dinamicImg)
    contentElement.insertAdjacentHTML('beforeend', dinamicImg)
}