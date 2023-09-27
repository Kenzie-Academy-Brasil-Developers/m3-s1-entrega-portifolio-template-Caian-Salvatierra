import style from "./style.module.css";
import LogoWhats from "../../assets/whatsapp-icon.png";
import LogoLinkedin from "../../assets/linkedin-icon.png"
import LogoGitHub from "../../assets/github-icon.png"


export const Footer = () => {
  return (
    <>
      <div className="container">
        <section className={style.section__footer}>
          <div className={style.section__container}>
            <h2 className="title2">Contato</h2>
            <div className= {style.section__img}>
            <a href="#" className="link"><img src={LogoWhats} alt="LogoWhatsapp" /></a>
            <a href="#" className="link"><img src={LogoLinkedin} alt="LogoLinkedin" /></a>
            <a href="#" className="link"><img src={LogoGitHub} alt="LogoGitHub" /></a>
            </div>
          </div>
            <p className="paragraph">Todos os direitos reservados - José da Silva </p>
        </section>
      </div>
    </>
  );
};
