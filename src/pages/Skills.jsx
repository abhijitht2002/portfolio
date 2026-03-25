import React from "react";
import Skill from "../components/Skill";
import {
  SiExpress,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiSpringboot,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa6";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";

function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-4">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
            What I build with
          </h2>
          <div className="w-12 h-px bg-gray-300" />
        </div>

        <div className="mt-4 space-y-8 md:space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium uppercase tracking-wide text-gray-500">
              Languages
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Skill title="Java" icon={FaJava} />
              <Skill title="JavaScript" icon={SiJavascript} />
              {/* <Skill title="TypeScript" icon={BiLogoTypescript} /> */}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-medium uppercase tracking-wide text-gray-500">
              Frontend
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Skill title="HTML" icon={FaHtml5} />
              <Skill title="CSS" icon={IoLogoCss3} />
              <Skill title="Bootstrap" icon={FaBootstrap} />
              <Skill title="React" icon={FaReact} />
              <Skill title="TailwindCSS" icon={RiTailwindCssFill} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-medium uppercase tracking-wide text-gray-500">
              Backend
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Skill title="Node" icon={DiNodejs} />
              <Skill title="Express" icon={SiExpress} />
              <Skill title="Spring Boot" icon={SiSpringboot} />
              <Skill title="mongoDB" icon={BiLogoMongodb} />
              <Skill title="mySql" icon={SiMysql} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-medium uppercase tracking-wide text-gray-500">
              Tools
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Skill title="Postman" icon={SiPostman} />
              <Skill title="Git" icon={FaGitAlt} />
              <Skill title="GitHub" icon={FaGithub} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
