import styles from "../styles/Home.module.css";
import Film from "./film";
import FilmPoster from "./filmPoster";
import React, { useState, useEffect } from "react";

function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      //Fetch l'api de la mongoDB => await la réponse => appliquer la data avec setFilms
      const response = await fetch(
        "https://cinemashelve-back.vercel.app/films/"
      );
      const data = await response.json();
      setFilms(data);
    };
    fetchFilms();
  }, []);

  // le rendu sur le site
  return (
    <div>
      <header className={styles.head}>
        <div className={styles.title}>CinemaShelve</div>
        <input
          className={styles.inputField}
          placeholder="titre de film"
        ></input>
        <div className={styles.logo}> LOGO </div>
      </header>

      <main className={styles.mainCont}>
        {films.map((film, index) => (
          <FilmPoster key={index} title={film.title} />
        ))}

        {films.map((film, index) => (
          <Film
            key={index}
            title={film.title}
            duration={`${film.duration}min`}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
