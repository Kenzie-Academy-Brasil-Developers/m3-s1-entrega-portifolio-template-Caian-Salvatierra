import Banner from "../../assets/banner-img.png";
import style from "./style.module.css";

export const BannerSection = () => {
  return (
    <div className="container">
      <section className={style.banner__section}>
        <div>
          <p className={style.paragraph__name} >JOSEDASILVA</p>
          <h1 className="title1">Bem vindo ao meu portfólio</h1>
          <p className="paragraph">Uma frase interessante sobre mim</p>
          <button className="btn">Saiba mais</button>
        </div>
        <img src={Banner} alt="Banner" />
      </section>
    </div>
  );
};
