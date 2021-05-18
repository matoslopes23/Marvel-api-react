import React, { useEffect, useState } from "react";
import api from "../services/api";

import styles from "../styles/characters.module.scss";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") {
      api.get("/characters").then((response) => {
        setCharacters(response.data.data.results);
      });
    } else {
      api.get(`/characters?nameStartsWith=${query}`).then((response) => {
        setCharacters(response.data.data.results);
      });
    }
  }, [query]);

  const onSearch = (q: string) => {
    setQuery(q);
    console.log("alguma coisa", q);
  };

  return (
    <div className={styles.container}>
      <header>
        <input
          type="text"
          className="form-control"
          placeholder="Pesquisar super herói... (ex. Iron-man)"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={query}
        />
      </header>

      <main>
        {characters.map((character) => {
          return (
            <div key={character.id} className={styles.card}>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="thumbnail"
              />
              <h2>{character.name}</h2>
              {/* <p>{character.description}</p> */}
              <a href={`/character/${character.id}`}>Saiba mais...</a>
            </div>
          );
        })}
      </main>
      <footer>
        <small>Data Provided by Marvel &copy; 2020 MARVEL</small>
      </footer>
    </div>
  );
};

export default Characters;
