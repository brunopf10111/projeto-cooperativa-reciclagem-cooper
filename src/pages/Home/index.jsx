import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className="apresentacao">
            <p>
              Somos a Cooperativa de Reciclagem de Bocaiúva, <br></br>promovendo sustentabilidade e um futuro mais limpo para nossa comunidade.
              <br />
              <span>Equipe Cooper</span>
            </p>
            <Link to="/coletas" className={`${styles.btn} ${styles.btn_red}`}>
              Começar
            </Link>
          </div>
          <figure>
            <img
              className={styles.img_home}
              src="/natureza.svg"
              alt="Imagem de natureza"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
