"use strict";
let numberOfFilms;

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null)  {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function getAnswers() {
    const film = prompt('Один из последних просмотренных фильмов', '');
    const grade = +prompt('На сколько вы оцениваете его?', '');

    if (film != null && grade != null && film != '' && grade != '' && film != film.length < 60 && grade < 100) {
        personalMovieDb.movies[film] = grade;
    } else {
        alert('error');
        getAnswers();
    }
}

getAnswers();
getAnswers();

function showYourLevel() {
    if (numberOfFilms <= 10) {
        alert ('Просмотренно слишком мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms < 31) {
        alert ('вы классический зритель');
    } else if (numberOfFilms >= 31) {
        alert ('вы киноман');
    } else {
        alert ('неверный ответ');   
    }
}

showYourLevel();

function showMyDb() {
    if (personalMovieDb.privat === false) {
        console.log(personalMovieDb);
    }
}

showMyDb();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();