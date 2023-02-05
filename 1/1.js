//Часа три писал. То так попробовал, то сяк. 
//Как должно работать понимаю(алгоритм), а как написать - только основную суть.

function celciusToFarhenheit(c) {
    const a = 1.8;
    const b = 32;
    f = a * c + b;
    return f;
}

const celcius = Number.parseInt(prompt(`Привет! Я конвертер из Цельсия в Фаренгейты.
Введите значение температуры в Цельсиях: `));

celciusToFarhenheit(celcius);
alert(`Цельсий: ${celcius} , Фаренгейт: ${Math.round(convertingValue(f))} `);