"use strict";
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres:[],
// 	privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
// 		b = prompt('На сколько оцените его?', ''),
// 		c = prompt('Один из последних просмотренных фильмов', ''),
// 		d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 4) {
// 	console.log('Ok!');
// } else {
// 	console.log('Error');
// }

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('Ок!');
// }

// (num === 50) ? console.log('ok!') : console.log('Error');

// const num = 88;

// switch (num) {
// 	case 49: 
// 		console.log('неверно!');
// 		break;
// 	case 109: 
// 		console.log('неверно!');
// 		break;
// 	case 88: 
// 		console.log('верно!');
// 		break;
// 	default: 
// 	console.log('не в этот раз');
// 	break;
// }

// let num = 50;

// while (num < 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 		console.log(num);
// 		num++;
// }
// while (num < 57);

// for (let i = 1; i < 8; i++)
// {
// 	console.log(num);
// 	num++;
// }

// let num = 50;
// for (let i = 1; i < 8; i++)
// { 
// 	if (i === 6) 
// 	{ 
// 	//break
// 	continue;
// 	}
// 	console.log(i);
	
// }

// Урок 15 

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 		count: numberOfFilms,
// 		movies: {},
// 		actors: {},
// 		genres:[],
// 		privat: false
// 	};
	


// 	for (let i = 0; i < 2; i++) { 
// 		const a = prompt('Один из последних просмотренных фильмов', ''),
// 				b = prompt('На сколько оцените его?', '');

//  Нереализованный вариант
// switch (a) {
// 	case null: 
// 		console.log('неверно!');
// 		break;
// 	case '': 
// 		console.log('неверно!');
// 		break;
// 	default: 
// 	console.log('ок');
// 	break;
// } 

// switch (b) {
// 	case null: 
// 		console.log('неверно!');
// 		break;
// 	case '': 
// 		console.log('неверно!');
// 		break;
// 	default: 
// 	console.log('ок');
// 	break;
// } 

// 	}
// Вариант 1
		// if (a != null && b != null && a !='' && b != '' && a.length < 50) {
		// 	personalMovieDB.movies[a] = b;
		// 	console.log('done');
		// }
		// else {
		// 	console.log('Error');
		// 	i--;
		// }
			
	



// 	if (personalMovieDB.count < 10) {
// 		console.log("Просмотрено довольно мало фильмов");
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) 
// 	{console.log("Вы классический зритель");}
// 	else if (personalMovieDB.count >= 30) 
// 	{console.log("Вы киноман");}
// 	else 
// 	{console.log("Произошла ошибка");}

	

// console.log(personalMovieDB);


// Урок 17

const str = "test";
const arr = [1, 2, 3];

console.log(arr.length);
