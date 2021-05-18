import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <img src="./images/logo.svg" alt="logotipo my super hero" />
      </header>
      <main>
        <div>
          <h1>Api Marvel Comics Characters</h1>
          <p>
            O Universo Marvel é o universo compartilhado onde ocorrem as histórias na maioria dos títulos de quadrinhos americanos e outras mídias publicadas pela Marvel
          </p>
          <a href="/characters">Pesquisar</a>
          {/* <Link to={`/characters`}>Pesquisar</Link> */}
        </div>

        <div>
          <img src="./images/invincible-Iron-Man.jpg" alt="" />
        </div>
      </main>
      <footer>
        <small>Data Provided by Marvel &copy; 2020 MARVEL</small>
      </footer>
    </div>
  );
}
