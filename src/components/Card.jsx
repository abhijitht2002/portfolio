import React from "react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Card({ thumbnail, title, description, link, repo }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative w-full overflow-hidden aspect-video">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover" />

      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 z-10 bg-black/60 p-2 rounded-full 
               opacity-100 lg:opacity-0 lg:group-hover:opacity-100
               transition-all duration-300 hover:scale-110"
        >
          <FaGithub className="w-4 h-4 text-white" />
        </a>
      )}

      <div className={`absolute inset-x-0 bottom-0
    ${expanded ? "h-auto lg:h-full" : "h-1/2 lg:h-full"}
    bg-black/60 p-4 flex flex-col justify-end
    opacity-100 lg:opacity-0 lg:group-hover:opacity-100
    transition-all duration-300`}
      >
        <h1 className="text-sm sm:text-base lg:text-xl text-white flex items-center gap-2">
          {link ? (<a href={link} target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline md:no-underline md:hover:underline">
            {title}
            <ExternalLink size={16} />
          </a>) : (title)}
        </h1>
        {/* Description */}
        <p
          className={`text-xs sm:text-sm text-white/80 ${expanded ? "" : "line-clamp-2"
            }`}
        >
          {description}
        </p>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-blue-300 mt-1 w-fit"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div >
  );
}

export default Card;
