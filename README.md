# Consegna:
- Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

# MILESTONE 1
- Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

# MILESTONE 2
- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. 
- Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

# MILESTONE 3
- Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

# BONUS 1:
- Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

# BONUS 2:
- Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


# Description
.
- Creiamo una array "listImg" contenente 5 immagini in Javascript
- Creiamo un contenitore con all'interno un IMMAGINE (width 100%) e stilizziamolo in HTML/CSS.
- Dopo aver verificato la funzionalità, rimuoviamo tutto il markup.
    - Utilizziamo un ciclo for dove daremo ad una sola immagine con valore di INDICE PROGRESSIVO DEL CICLO, una classe che la renderà visibile.
    - Avremo le immagini create tramite javascript e non tramite html.
- Creiamo un addEventListener sul button "arrowRight" per cambiare l'immagine attiva (spostando la classe di "VISIBILITA' ad un altro elemento dell'array) e andare in ordine progressivo a visualizzare tutte le immagini.


# BONUS

- Diamo le stesse proprietà alla "arrowLeft" mandando in negativo il valore di indice progressivo e mettendo un valore numerico MASSIMO alla array (es: 5).

-Creiamo un contenitore con position absolute e al padre il position relative, con 5 immagini presenti in colonna sottoforma di button e al 'click' cambia il valore dell'immagine con index(x) in base all'immagine cliccata.


# Tools
- let/const
- array[]
- HTML/CSS ELEMENTS
- CICLO FOR
- IF/ELSE IF
- addEventListener
- querySelector or similar
