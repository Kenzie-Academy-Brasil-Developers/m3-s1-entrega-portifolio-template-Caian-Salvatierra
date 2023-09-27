import Logo from "../../assets/portfolio.png";
import styele from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styele.container__header}>
        <img src={Logo} alt="logo" />

        <ul className={styele.container__item}>
          <li>Sobre</li>
          <li>Stack</li>
          <li>Projetos</li>
        </ul>

        <button className="btn">Contato</button>
      </div>
    </header>
  );
};
