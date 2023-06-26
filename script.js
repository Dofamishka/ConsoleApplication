"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "Сколько фильмов вы уже посмотрели ?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt(
          "Один из последних просмотренных фильмов ?",
          ""
        ).trim(),
        grade = prompt("На сколько оцените его ?", "").trim();

      if (
        lastFilm == "" ||
        lastFilm.length > 50 ||
        lastFilm == null ||
        grade == "" ||
        grade.length > 50 ||
        grade == null
      ) {
        i--;
      } else {
        personalMovieDB.movies[lastFilm] = grade;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотренно довольно мало фильмов");
    } else if (
      10 <= personalMovieDB.count &&
      personalMovieDB > 30 /* несколько условий указываем с оператором "и" */
    ) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 1; i++) {
      /*  let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
             if (genre === '' || genre === null) {
                 i--;
                 console.log('Error')
             } else {
                 personalMovieDB.genres[i - 1] = genre;
             }; */
      let genres = prompt(`Введите ваши любимые жанры через запятую`)
        .trim()
        .toLocaleLowerCase();

      if (genres === "" || genres === null) {
        i--;
        console.log("Error");
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisbleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
personalMovieDB.toggleVisbleMyDB();
console.log(personalMovieDB.privat);
