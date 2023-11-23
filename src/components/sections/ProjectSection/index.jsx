import { ProjectList } from "./ProjectList";
import { projects } from "../../../data/projects.js";
import style from "./style.module.css";
import gitIcon from "../../../assets/git-icon.png";

export const ProjectSection = () => {
  return (
    <>
      <div className="container">
        <section className={style.section__project}>
          <h2 className="title2">Projetos</h2>

          <ul className={style.project__list}>
            {projects.map((project) => {
              return (
                <li className={style.project__li} key={project.name}>
                  <ProjectList
                    title={project.name}
                    image={gitIcon}
                    description={project.description}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};
