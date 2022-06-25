"use strict";



const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        personalMovieDb.count = prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || isNaN(this.count) || this.count == null)  {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    getAnswers: function() {
        const film = prompt('Один из последних просмотренных фильмов', '');
        const grade = +prompt('На сколько вы оцениваете его?', '');
    
        if (film != null && grade != null && film != '' && grade != '' && film != film.length < 60 && grade < 100) {
            personalMovieDb.movies[film] = grade;
        } else {
            alert('error');
            this.getAnswers();
        }
    },

    showYourLevel: function() {
        if (this.count <= 10) {
            alert ('Просмотренно слишком мало фильмов');
        } else if (this.count > 10 && this.count < 31) {
            alert ('вы классический зритель');
        } else if (this.count >= 31) {
            alert ('вы киноман');
        } else {
            alert ('неверный ответ');   
        }
    },

    showMyDb: function() {
        if (this.privat === false) {
            console.log(personalMovieDb);
        }

        this.toggleVisibleMyDb();
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваш любимые жанры чере запятую`);

            if (genres === '' || genres === null) {
                i--;
            } else {
                this.genres = genres.split(', ');
            }
        }
     
        this.genres.forEach(function(item, i){
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDb: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};

personalMovieDb.start();
personalMovieDb.getAnswers();
personalMovieDb.getAnswers();
personalMovieDb.showYourLevel();
personalMovieDb.showMyDb();
personalMovieDb.writeYourGenres();


