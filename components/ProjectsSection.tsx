import { projectsData } from "@/constants";
import { IProjects } from "@/types";

function ProjectsSection() {
  const cardColors = ["card-blue", "card-green", "card-purple"];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <ul className="project-list">
          {projectsData.map((project: IProjects, index: number) => {
            const cardClass = cardColors[index % cardColors.length];

            return (
              <li className={`project-item ${cardClass}`} key={project.id}>
                <h3>
                  <span className="dot"></span>
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className="project-item-links">
                  <a href={project.github}>GitHub</a>
                  <a href={project.google}>Live Demo</a>
                  <a href={project.youtube}>Youtube</a>
                </div>
                <div className="project-item-skills">
                  <h4>Skills:</h4>

                  {project.skills.map((projectSkill) => (
                    <span
                      className="project-item-skill-badge"
                      key={projectSkill}
                    >
                      {projectSkill}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;
