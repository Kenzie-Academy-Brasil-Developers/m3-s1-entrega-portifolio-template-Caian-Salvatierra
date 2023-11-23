import style from "./style.module.css";

export const AboutMe = () => {
  return (
    <div className="container">
      <section className={style.aboutMe__section}>
        <div className={style.aboutMe__container}>
          <h2 className="title2">Sobre mim</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            molestias dicta dolores veritatis vel enim quas, vero repudiandae
            laboriosam fugit eum officia doloribus labore magnam nobis commodi
            aliquid? Commodi sequi ut, placeat accusantium voluptatibus numquam
            ratione maiores cupiditate facere quisquam at veritatis officiis,
            saepe obcaecati. Id placeat dignissimos recusandae asperiores.
          </p>
        </div>
      </section>
    </div>
  );
};
