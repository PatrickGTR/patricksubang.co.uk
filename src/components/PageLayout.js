import React from "react";

export default ({ title, subtitle, children }) => {
  return (
    <>
      <div className="site-wrapper">
        <main className="site-content">
          <div className="container">
            <header>
              <img
                className="logo"
                alt="Logo"
                src="https://i.imgur.com/A9A5fpV.png"
              />
              <h1 className="title title--white is-centered">{title}</h1>
            </header>

            <section>{children}</section>
          </div>
        </main>
      </div>
      <footer>
        2019 &copy; Patrick Dave Subang{" "}
        <span style={{ color: "grey", fontWeight: "bold" }}>
          All rights reserved
        </span>
      </footer>
    </>
  );
};
