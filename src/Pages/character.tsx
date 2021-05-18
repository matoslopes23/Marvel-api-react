import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

import styles from "../styles/character.module.scss";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default function Character() {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  const { id } = useParams<{ id?: string }>();
  console.log(id);
  useEffect(() => {
    api.get(`/characters/${id}?`).then((response) => {
      setCharacters(response.data.data.results);
      console.log(response.data.data.results);
    });
  }, []);
  return (
    <div className={styles.container}>
      {characters.map((character) => {
        return (
          <div key={character.id} className={styles.card}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt="thumbnail"
            />
            <div>
              <h2>{character.name}</h2>
              <p>{character.description}</p>

              <a href="/characters">Voltar</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
