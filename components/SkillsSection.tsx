import { skillsData } from "@/constants";
import { ISkills } from "@/types";
import React from "react";

function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <ul className="skills-list">
          {skillsData.map((item: ISkills) => (
            <li key={item.id} className="skills-item">
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SkillsSection;
