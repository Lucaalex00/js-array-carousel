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
    let dinamicImg = `<img src="./assets/img/${imgListIndex}" alt="Img" class="${i === activeImg ? 'active' : ''}"></img>`;
    //Creo una variabile con all'interno un immagine (formato html) con una classe 'active' che verrà assegnata all'elemento con valore di "i" (INDICE) che cambia in ogni ciclo for (partendo dal valore di "activeImg = 0") a cui diamo come valore SRC (percorso) l'indice della array equivalente al valore di "i" (ad ogni ciclo)

    /* console.log(dinamicImg); */ //DEBUG
    contentElement.insertAdjacentHTML("beforeend", dinamicImg);

} console.log(contentElement); //DEBUG

upArrowElement.addEventListener('click', function () {
    console.log('su'); //DEBUG
    activeImg--;
    const currentImg = document.querySelector('img.active');
    console.log(currentImg); //DEBUG
    currentImg.classList.remove('active');
    const imgGroup = document.querySelectorAll('.content img')
    console.log(imgGroup); //DEBUG
    console.log(imgGroup[activeImg]); //DEBUG
    if (activeImg < 0) { //SE il valore di activeimg è superiore alla lunghezza totale dell'array - 1, ritorna al valore 0 (inizio)
        activeImg = imgList.length - 1;
        console.log(activeImg)
    }
    imgGroup[activeImg].classList.add('active');
})
downArrowElement.addEventListener('click', function () {
    console.log('giu'); //DEBUG
    activeImg++;
    const currentImg = document.querySelector('img.active');
    console.log(currentImg); //DEBUG
    currentImg.classList.remove('active');
    const imgGroup = document.querySelectorAll('.content img')
    console.log(imgGroup); //DEBUG
    console.log(imgGroup[activeImg]); //DEBUG
    if (activeImg > imgList.length - 1) { //SE il valore di activeimg è superiore alla lunghezza totale dell'array - 1, ritorna al valore 0 (inizio)
        activeImg = 0;
        console.log(activeImg) //DEBUG
    }
    //aggiungi all'elemento activeImg la classe active per far scrollare le
    imgGroup[activeImg].classList.add('active');

})
