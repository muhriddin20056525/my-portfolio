import React from "react";

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
      </div>
    </section>
  );
}

export default HeroSection;
