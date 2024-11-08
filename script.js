// Array de palabras (ejemplos)
const word = ['MANZANA', 'PERRO', 'GATO'];

//Selector aleatorio de palabras
const getRandomWord = () => {
    return word[Math.floor(Math.random() * word.length)];
};

//Cramos un array para almacenar la palbra seleccionada en formato de array
const createWordArray = (word) => {
    return word.split('').map(letter => '_');
};

// Funcion para actualizar la pantalla con la palabra actual
const updateWordDisplay = (wordArray) => {
    const wordElement = document.querySelector('.word');
    wordElement.textContent = wordArray.join(' ');
};

//Funcion para crear el teclado
const createKeyboard = () => {
    const keyboardElement = document.querySelector('.keyboard');
    const alphabet = 'ABCDEFGHIJKLMNIOPQRSTUVWXYZ'.split('');

    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.textContent
        = letter;
        button.addEventListener('click', () => {
            guessLetter(letter);
    });
    keyboardElement.appendChild(button)
    });
};

