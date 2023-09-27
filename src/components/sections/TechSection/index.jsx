import { TechList } from "./TechList";
import { technologies } from "../../../data/technologies.js";
import style from "./style.module.css"

export const TechSection = () => {
  return (
    <>
      <div className="container">
        <section className= {style.section__tech} >
          <h2 className="title2">Tecnologias</h2>
          
          <ul className={style.tech}>
            {technologies.map((tech) => {
              return (
                <li className={style.list} key={tech.name}>
                  <TechList image={tech.img} title={tech.name} />
                </li>
              );
            })}
          </ul>
          
        </section>
      </div>
    </>
  );
};
