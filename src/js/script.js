"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

/* start(); */

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt("Какой последний фильм вы посмотрели?", ""),
      b = prompt("Насколько его оценили?", ""),
      c = prompt("Какой последний фильм вы посмотрели?", ""),
      d = prompt("Насколько его оценили?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой последний фильм вы посмотрели?", ""),
              b = prompt("Насколько его оценили?", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }
}

/* rememberMyFilms(); */

/* let i = 0;
while (i < 2) {
    const a = prompt("Какой последний фильм вы посмотрели?", ""),
          b = prompt("Насколько его оценили?", "");
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
    console.log('error');
    i--;
    }
    i++;
} */

/* let i = 0;
do {
    const a = prompt("Какой последний фильм вы посмотрели?", ""),
          b = prompt("Насколько его оценили?", "");
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
    console.log('error');
    i--;
    }
    i++;
}
while (i < 2); */




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

/* detectPersonalLevel(); */

/* function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
} */

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();