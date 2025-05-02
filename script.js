// let expenses1 = prompt('Введите обязательную статью расходов?');

// let amount1 = +prompt('Во сколько это обойдется?');

// let expenses2 = prompt('Введите обязательную статью расходов?');

// let amount2 = +prompt('Во сколько это обойдется?');

// let budgetMonth = amount1 + amount2;

// console.log('Бюджет на месяц:', budgetMonth,);


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
// console.log(typeof + 'money');

let income = 'stock exchange';
// console.log (typeof income);

let deposite = !!prompt('Есть ли у вас депозит в банке?');
// console.log(typeof deposite);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//console.log(addExpenses.length);
//console.log(addExpenses.toLowerCase(addExpenses));
// console.log(addExpenses.split(', '));


let mission = 150000;
// console.log('Цель заработать', mission, 'рублей');
// console.log('Потребуется месяцев:', Math.ceil(mission / budgetMonth),);

let period = 12;
// console.log('Период равен', period, 'месяцам');

let start = function() {
    do{
        money = prompt('Ваш месячный доход?');
    } while(!isNumber(money))

    };

start();


// ДОП ЗАДАНИЕ
// let lang = 'ru'

// switch (lang){
//     case 'ru':
//         console.log('пон,вт,ср,чт,пт,сб,вск');
//         break;
//     case 'en':
//         console.log('Mon,tu,We,thu,fri,sat,sun');
//         break;
//     default:
//         console.log('не верно');
// }


// let ru = ['пон','вт','ср','чт','пт','сб','вск'];
// let en = ['Mon','tu','We','thu','fri','sat','sun'];
// console.log(en);

// let namePerson = 'Паша';
// let result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподователь' : 'студент';
// console.log(result);



// Функции

let expenses1, expenses2;


let getExpensesMonth = function() {
    let sum = 0;

    for (let i = 0; i < 2; i++){
        let expenseName;

        if (i === 0){
            expenseName = prompt('Введите обязательную статью расходов?');
            expenses1 = expenseName;
        } else if (i === 1) {
            expenseName = prompt('Введите обязательную статью расходов?');
            expenses2 = expenseName;
        };

        let cost;

        do { 
            cost = +prompt('Во сколько это обойдется?');
                if (!isNaN(cost) && isFinite(cost)) {
                break;
            }
        }
        while (true);
        
        sum += cost;
    };

    console.log(sum);

    return sum;
};


let expensesAmount = getExpensesMonth();



console.log(expensesAmount);

let getAccumulatedMonth = function() {
        return money - expensesAmount;
};
 
let accumulatedMonth = getAccumulatedMonth;

let getTargetMonth = function(){
   let test = mission / accumulatedMonth();
    if (test >= 0) {
        console.log ('Цель будет достигнута')

    } else {
        console.log ('Цель не будет достигнута')
    }
}();


let budgetDay = accumulatedMonth()/30;
console.log('Бюджет на день:', Math.floor(budgetDay),'руб');


let showTypeOf = function(data){
    return typeof(data);
   }
console.log(money, showTypeOf(money));
console.log(income, showTypeOf(income));
console.log(deposite, showTypeOf(deposite));

let getStatusIncome = function () {
    if (budgetDay > 1200 || budgetDay == 1200) {
        console.log('У вас высокий уровень дохода');
    }
    if (budgetDay > 600 && budgetDay < 1200 || budgetDay == 600) {
        console.log('У вас средний уровень дохода');
    }
    if (budgetDay < 600 && budgetDay > 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
    if (budgetDay < 0 || budgetDay == 0){
        console.log('Что то пошло не так');
    }
};
getStatusIncome();

// Доп задание

// function processString(input) {
//     // Проверяем, является ли аргумент строкой
//     if (typeof input !== 'string') {
//         alert('Аргумент не является строкой.');
//         return;
//     }

//     // Убираем пробелы в начале и в конце строки
//     let trimmedString = input.trim();

//     // Проверяем длину строки и обрезаем, если она больше 30 символов
//     if (trimmedString.length > 30) {
//         trimmedString = trimmedString.substring(0, 30) + '...';
//     }

//     return trimmedString;
// }
// console.log(processString("Привет"));


