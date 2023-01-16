// Задание №1
console.log('Задание №1');

let age = +prompt(' Задание №1\n Сколько Вам лет?');

if (age > 0 && age <= 12) {
    console.log('Пользователь ребенок');
} else if (age > 12 && age < 18) {
    console.log('Пользователь подросток');
} else if (age >= 18 && age < 60 ) {
    console.log('Пользователь взрослый человек');
} else if (age >= 60) {
    console.log('Пользователь пенсионер');
} else {
    console.log('Пользователь еще не родился');
}

// Задание №2
console.log('\nЗадание №2');

let keyboardNumeral = +prompt(' Задание №2\n Введите цифру для вывода спецсимвола');

switch (keyboardNumeral) {
    case 1:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "!"`);
        break;
    case 2:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "@"`);        
        break;
    case 3:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "#"`);        
        break;
    case 4:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "$"`);        
        break;
    case 5:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "%"`);        
        break;
    case 6:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "^"`);        
        break;
    case 7:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "&"`);        
        break;
    case 8:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "*"`);        
        break;
    case 9:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол "("`);        
        break;
    case 0:
        console.log(`Цифре ${keyboardNumeral} соответсвует спецсивол ")"`);        
    break;

    default:
        break;
}

// Задание №3
console.log('\nЗадание №3');

let randomNumber =  String(prompt(' Задание №3\n Введите трехзначное число для определения одинаковых цифр'))

if (randomNumber.length == 3) {
    if (randomNumber[0] == randomNumber[1] && randomNumber[1] != randomNumber[2]){
        console.log(`Первая цифра = ${randomNumber[0]} равна второй цифре = ${randomNumber[1]}`);
    } else if (randomNumber[0] == randomNumber[2] && randomNumber[0] != randomNumber[1]) {
        console.log(`Первая цифра = ${randomNumber[0]} равна третьей цифре = ${randomNumber[2]}`);
    } else if (randomNumber[1] == randomNumber[2] && randomNumber[2] != randomNumber[0]) {
        console.log(`Вторая цифра = ${randomNumber[1]} равна третьей цифре = ${randomNumber[2]}`);
    } else if (randomNumber[0] == randomNumber[1] && randomNumber[1] == randomNumber[2]) {
        console.log(`Все три цифры одинаковые = ${randomNumber[0]}`);
    } else {
        console.log('Одинаковых цифр нет');
    }
} else {
    console.log('Введено неправильное число');
}

// Задание №4
console.log('\nЗадание №4');

let writeYear = +prompt(' Задание №4\n Введите год для определения високосности');

(((writeYear % 400) == 0 && writeYear != 0) || ((writeYear % 4) == 0 && (writeYear % 100) != 0 && writeYear != 0)) ? console.log(`${writeYear} год - високосный`) : (writeYear == 0) ? console.log(`${writeYear} года - не существует`) : console.log(`${writeYear} год - невисокосный`);

// // Задание №5
console.log('\nЗадание №5');

let palindromeNumber = String(prompt(' Задание №5\n Введите пятиразрядное число для определения полиндрома'))

if (palindromeNumber.length == 5) {
    (palindromeNumber[0] == palindromeNumber[4] && palindromeNumber[1] == palindromeNumber[3]) ? console.log(`Число ${palindromeNumber} - полиндром`) : console.log(`Число ${palindromeNumber} не является полиндромом`);;
} else {
    console.log(' Введено неверное число');
}

// Задание №6
console.log('\nЗадание №6');

let amountToExchange = +prompt(' Задание №6\n Введите сумму USD для обмена');
let currencyForExchange = String(prompt(' Выберите валюту для обмена: EUR, UAH, AZN\n Обменные курсы:\n 1 USD = 0,92 EUR\n 1 USD = 36,75 UAH\n 1 USD = 1,7 AZN'))
let resultForExchange;

switch (currencyForExchange) {
    case 'eur':;
    case 'Eur':;
    case 'EUr':;
    case 'EUR':;
    case 'eUr':;
    case 'eUR':;
    case 'euR':;
    case 'EuR':;
        resultForExchange = amountToExchange * 0.92;
        console.log(`${amountToExchange} USD = ${resultForExchange.toFixed(2)} EUR`);
        break;

    case 'uah':;
    case 'uAh':;
    case 'uAH':;
    case 'uaH':;
    case 'UAH':;
    case 'UAh':;
    case 'Uah':;
    case 'UaH':;
        resultForExchange = amountToExchange * 36.75;
        console.log(`${amountToExchange} USD = ${resultForExchange.toFixed(2)} UAH`);
        break;

    case 'azn':;
    case 'azN':;
    case 'aZN':;
    case 'aZn':;
    case 'AZN':;
    case 'AZn':;
    case 'Azn':;
    case 'AzN':;
        resultForExchange = amountToExchange * 1.7;
        console.log(`${amountToExchange} USD = ${resultForExchange.toFixed(2)} AZN`);
        break;

    default:
        console.log('Введена неверная валюта')
        break;
}

// Задание №7
console.log('\nЗадание №7');

let purchase = +prompt(' Задание №7\n Введите сумму покупки');
let payment;

if (purchase > 0 && purchase < 200) {
    console.log(`Сумма покупки = ${purchase}\nСкидка 0%\nСумма к оплате = ${purchase}`);
} else if (purchase >= 200 && purchase < 300) {
    payment = purchase * 0.97
    console.log(`Сумма покупки = ${purchase}\nСкидка 3% = ${(purchase - payment).toFixed(2)}\nСумма к оплате = ${payment.toFixed(2)}`)
} else if (purchase >= 300 && purchase < 500) {
    payment = purchase * 0.95
    console.log(`Сумма покупки = ${purchase}\nСкидка 5% = ${(purchase - payment).toFixed(2)}\nСумма к оплате = ${payment.toFixed(2)}`)
} else if (purchase > 500) {
    payment = purchase * 0.93
    console.log(`Сумма покупки = ${purchase}\nСкидка 7% = ${(purchase - payment).toFixed(2)}\nСумма к оплате = ${payment.toFixed(2)}`)
} else {
    console.log('Введена неверная сумма');
}

// Задание №8
console.log('\nЗадание №8');

const circleLength = +prompt(' Задание №8\n Введите длину окружности');
const perimeterSquare = +prompt(' Задание №8\n Введите периметр квадрата');

const squareSide = perimeterSquare / 4;
const circleDiagonal = circleLength / Math.PI;

(squareSide > circleDiagonal) ? console.log(`Окружность длиной ${circleLength} поместится в квадрат с периметром ${perimeterSquare}`) : console.log(`Окружность длиной ${circleLength} не поместится в квадрат с периметром ${perimeterSquare}`);

// Задание №9
console.log('\nЗадание №9');

let answerToQuestion = +prompt('Задание №9\nВыберите верный вариант ответа на вопросы. За каждый верный вариант начисляется 2 балла.\nВопрос №1\nКак продолжить известную поговорку "Не пойман - ..."? \n1) Не вор\n2) Не жулик\n3) Не олигарх');
let currentAccount = 0;

if (answerToQuestion == 1) {
    currentAccount += 2;
    console.log(`Вопрос №1: Верно!`);
} else if (answerToQuestion == 2 || answerToQuestion == 3) {
    console.log(`Вопрос №1: К сожалению ответ неверный..`);
} else {
    console.log(`Вопрос №1: Вы играете не по правилам. За это баллов к сожалению не начисляется.`);
}

let answerToQuestion2 = +prompt('Задание №9\nВыберите верный вариант ответа на вопросы. За каждый верный вариант начисляется 2 балла.\nВопрос №2\nКак часто характеризуют преувеличенный конфликт? \n1) Цунами в рюмке водки\n2) Шторм в кружке пива\n3) Буря в стакане воды');

if (answerToQuestion2 == 3) {
    currentAccount += 2;
    console.log(`Вопрос №2: Верно!`);
} else if (answerToQuestion2 == 2 || answerToQuestion2 == 1) {
    console.log(`Вопрос №2: К сожалению ответ неверный..`);
} else {
    console.log(`Вопрос №2: Вы играете не по правилам. За это баллов к сожалению не начисляется.`);
}

let answerToQuestion3 = +prompt('Задание №9\nВыберите верный вариант ответа на вопросы. За каждый верный вариант начисляется 2 балла.\nВопрос №3\nЧто обычно кричат гости на свадьбе? \n1) Водки!\n2) Горько!\n3) Шайбу!');

if (answerToQuestion3 == 2) {
    currentAccount += 2;
    console.log(`Вопрос №3: Верно!`);
} else if (answerToQuestion3 == 1 || answerToQuestion3 == 3) {
    console.log(`Вопрос №3: К сожалению ответ неверный..`);
} else {
    console.log(`Вопрос №3: Вы играете не по правилам. За это баллов к сожалению не начисляется.`);
}

switch (currentAccount) {
    case 2:
    case 4:
        console.log(`Итоговый счет - ${currentAccount} балла`);
        break;
    case 0:
    case 6:
        console.log(`Итоговый счет - ${currentAccount} баллов`);
        break;
    default:
        break;
}

// Задание №10
console.log('\nЗадание №10');

let todayDay = +prompt( 'Задание №10\nВведите число месяца 1 - 31');
let todayMonth = +prompt( 'Задание №10\nВведите месяц\n 1 - январь, 2 - февраль, 3 - март и тд.');
let todayYear = +prompt( 'Задание №10\nВведите год');
let nextDay, nextDayMonth, nextDayYear;

if ((todayYear % 400) != 0 && ((todayYear % 4) != 0 || (todayYear % 100) == 0)) {
    if (todayMonth < 1 || todayMonth > 12 || todayDay <= 0 || todayDay >= 32 || todayYear == 0) {
        console.log(`Введена несуществующая дата ${todayDay}.${todayMonth}.${todayYear}.`);
    } else {
        switch (todayMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                if (todayDay == 31) {
                    nextDay = 1;
                    nextDayMonth = ++todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } 
                break;
                
            case 4:
            case 6:
            case 9:
            case 11:
                if (todayDay == 30) {
                    nextDay = 1;
                    nextDayMonth = ++todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else if (todayDay < 30){
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    console.log(`Введена несуществующая дата ${todayDay}.${todayMonth}.${todayYear}.`);
                }
                break

            case 2: 
                if (todayDay == 28) {
                    nextDay = 1;
                    nextDayMonth = ++todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else if (todayDay < 28){
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    console.log(`Введена несуществующая дата ${todayDay}.${todayMonth}.${todayYear}.`);
                }
                break

            case 12: 
                if (todayDay == 31 && todayYear != (-1)) {
                    nextDay = 1;
                    nextDayMonth = 1;
                    nextDayYear = ++todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else if (todayDay == 31 && todayYear == (-1)) {
                    nextDay = 1;
                    nextDayMonth = 1;
                    nextDayYear = 1;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                }
                break
            default:
                break;
        }
    }
} else {
    if (todayMonth < 1 || todayMonth > 12 || todayDay <= 0 || todayDay >= 32 || todayYear == 0) {
        console.log(`Введена несуществующая дата ${todayDay}.${todayMonth}.${todayYear}.`);
    } else {
        switch (todayMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                if (todayDay == 31) {
                    nextDay = 1;
                    nextDayMonth = ++todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } 
                break;
                
            case 4:
            case 6:
            case 9:
            case 11:
                if (todayDay == 30) {
                    nextDay = 1;
                    nextDayMonth = ++todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else if (todayDay < 30){
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    console.log(`Введена несуществующая дата ${todayDay}.${todayMonth}.${todayYear}.`);
                }
                break

            case 2: 
                if (todayDay == 29) {
                    nextDay = 1;
                    nextDayMonth = ++todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else if (todayDay < 29){
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    console.log(`Введена несуществующая дата ${todayDay}.${todayMonth}.${todayYear}.`);
                }
                break

            case 12: 
                if (todayDay == 31) {
                    nextDay = 1;
                    nextDayMonth = 1;
                    nextDayYear = ++todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                } else {
                    nextDay = ++todayDay;
                    nextDayMonth = todayMonth;
                    nextDayYear = todayYear;
                    console.log(`Следующий день это дата ${nextDay}.${nextDayMonth}.${nextDayYear}.`);
                }
                break
            default:
                break;
        }
    }
}
