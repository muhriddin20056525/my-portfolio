"use client";

import { IProjects } from "@/types";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { bestProjects } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>
          Hi, I'm <span>Davlatov Muhriddin</span>
        </h1>

        <p>
          Junior MERN Stack Developer passionate about building web applications
          with clean code and great user experiences.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">View My Work</button>
          <button className="btn-outline">Contact Me</button>
        </div>

        <div className="hero-bottom">
          <h2 className="section-title">Best Projects</h2>

          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="hero-carousel"
          >
            {bestProjects.map((bestProject: IProjects) => (
              <SwiperSlide className="hero-carousel-item">
                <h3>
                  <span className="dot"></span>
                  {bestProject.title}
                </h3>
                <p>{bestProject.description}</p>
                <div className="hero-carousel-link">
                  <a href={bestProject.github}>GitHub</a>
                  <a href={bestProject.google}>Live Demo</a>
                  <a href={bestProject.youtube}>Youtube</a>
                </div>
                <div className="hero-carousel-skills">
                  <h4>Skills:</h4>

                  {bestProject.skills.map((projectSkill) => (
                    <span
                      className="project-item-skill-badge"
                      key={projectSkill}
                    >
                      {projectSkill}
                    </span>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
