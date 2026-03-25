import React from "react";

function Contacts() {
  return (
    <section className="py-12 sm:py-14 md:py-16 text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-snug font-normal">
          You can see my works on{" "}
          <a
            href="https://github.com/abhijitht2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            Github
          </a>
          , connect on{" "}
          <a
            href="http://www.linkedin.com/in/abhijitht2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-300 transition">
            LinkedIn
          </a>
          , or{" "}
          <a
            href="pdf/Abhijith_T_Entri.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition"
          >
            download
          </a>{" "}
          my CV.
        </p>
      </div>
    </section>
  );
}

export default Contacts;
