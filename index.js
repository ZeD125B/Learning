"use strict";
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function getAnswers() {
    const film = prompt('Один из последних просмотренных фильмов', '');
    const grade = +prompt('На сколько вы оцениваете его?', '');
    personalMovieDb.movies[film] = grade;
}

getAnswers();
getAnswers();
