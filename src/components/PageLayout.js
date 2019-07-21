import React from "react";

export default ({ title, subtitle, children }) => {
  return (
    <>
      <div className="container">
        <main>
          <img
            className="logo"
            alt="Logo"
            src="https://i.imgur.com/A9A5fpV.png"
          />
          <h1 className="title title--white is-centered">{title}</h1>

          <button className="resume-btn">
            <a
              href="https://www.patrickgtr.ml/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </button>

          <section>{children}</section>
        </main>
      </div>
      <footer>Thank you for visiting my portfolio</footer>
    </>
  );
};
