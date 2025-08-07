"use client";

import { useEffect, useState } from "react";
import { projectCategoriesData, projectsData } from "@/constants";
import { IProjectCategories, IProjects } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

function ProjectsSection() {
  const [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    const updateChunkSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setChunkSize(1);
      } else {
        setChunkSize(4);
      }
    };

    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  const chunkedData = chunkArray(projectsData, chunkSize);
  const cardColors = ["card-blue", "card-green", "card-purple"];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <ul className="projects-category">
          {projectCategoriesData.map((item: IProjectCategories) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          className="projects-carousel"
        >
          {chunkedData.map((group, idx) => (
            <SwiperSlide key={idx}>
              <ul className="project-list">
                {group.map((project: IProjects, index) => {
                  const cardClass = cardColors[index % cardColors.length];
                  return (
                    <li
                      className={`project-item ${cardClass}`}
                      key={project.id}
                    >
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
                        {project.skills.map((skill) => (
                          <span
                            className="project-item-skill-badge"
                            key={skill}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSection;
