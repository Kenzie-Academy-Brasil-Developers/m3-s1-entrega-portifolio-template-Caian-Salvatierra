import style from "./style.module.css";

export const ProjectList = ({ title, image, description }) => {
  return (
    <>
      <div className={style.heard__card}>
        <h3 className="title3">{title}</h3>
        <img src={image} alt="git-icon" className={style.image__card} />
      </div>
      <p>{description}</p>
      <a href="#" className="link">
        Saiba mais
      </a>
    </>
  );
};
