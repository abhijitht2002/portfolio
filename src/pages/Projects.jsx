import React, { useEffect, useState } from "react";
import { data } from "../datas/data";
import Card from "../components/Card";

function Projects() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data);
  }, []);

  return (
    <section id="projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {datas.map((item) => (
          <Card
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            link={item.link}
            repo={item.repo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
