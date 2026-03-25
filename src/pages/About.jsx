import React from "react";

function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl  leading-snug font-normal">
          Hi, I’m Abhijith — I enjoy building simple applications and learning
          by doing. I focus on clean, calm interfaces and creating experiences
          that feel intuitive and honest. You can explore my{" "}
          <a
            href="#projects"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            works
          </a>{" "}
          or take a look at my{" "}
          <a
            href="#skills"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            skills
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default About;
