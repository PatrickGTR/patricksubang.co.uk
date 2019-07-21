import React from "react";
import { Spring } from "react-spring/renderprops";

export default ({ title, subtitle, children }) => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -1000 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div className="container">
            <main>
              <header>
                <img
                  className="logo"
                  alt="Logo"
                  src="https://i.imgur.com/A9A5fpV.png"
                />
                <h1 className="title title--white is-centered">{title}</h1>
              </header>

              <section>{children}</section>
            </main>
          </div>
          <footer>Thank you for visiting my portfolio</footer>
        </div>
      )}
    </Spring>
  );
};
