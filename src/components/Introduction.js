import React from "react";
import PageLayout from "./PageLayout";

import { Spring } from "react-spring/renderprops";

import { FaGithub, FaEnvelopeSquare } from "react-icons/fa";

export default () => {
  return (
    <PageLayout title="Patrick Dave Subang" subtitle="Get to know me!">
      <div className="columns">
        <div className="column">
          <div className="box">
            <article className="content">
              <h1
                className={[
                  "content__title",
                  "title",
                  "title--white",
                  "is-centered"
                ].join(" ")}
              >
                About me
              </h1>
              Hey there! I love programming as a hobby and hoping to make a
              career out of it. I like building discord bots, web applications
              and APIs. I love learning new things whether it comes to
              programming or fitness and do it to my best ability. I'm
              originally from Philippines but currently residing in the county
              of East Sussex, United Kingdom.
            </article>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <article className="content">
              <h1
                className={[
                  "content__title",
                  "title",
                  "title--white",
                  "is-centered"
                ].join(" ")}
              >
                Contact me!
              </h1>
              <div className="social">
                <span>
                  <FaGithub size="3em" />
                </span>
                <span>
                  <FaEnvelopeSquare size="3em" />
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="box">
            <article className="content">
              <h1
                className={["content__title", "title", "title--white"].join(
                  " "
                )}
              >
                Personal Projects
              </h1>

              <Spring
                from={{ marginRight: -10000 }}
                to={{ marginRight: 0 }}
                delay="200"
              >
                {props => (
                  <div style={props} className="columns">
                    <div className="column">
                      <div className="projects">
                        <img
                          className="projects__logo"
                          src="https://i.imgur.com/KV6uXsE.jpg"
                          alt="Fortnite Stats"
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="projects">
                        <img
                          className="projects__logo"
                          src="https://i.imgur.com/d8RmeyB.jpg"
                          alt="User Control Panel"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Spring>

              <Spring
                from={{ marginLeft: -10000 }}
                to={{ marginLeft: 0 }}
                delay="500"
              >
                {props => (
                  <div style={props} className="columns">
                    <div className="column">
                      <div className="projects">
                        <img
                          className="projects__logo"
                          src="https://i.imgur.com/rNKO8Fb.jpg"
                          alt="Portfolio Template"
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="projects">
                        <img
                          className="projects__logo"
                          src="https://i.imgur.com/EMtU2yD.jpg"
                          alt="Rockford Roleplay Website"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Spring>

              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="750">
                {props => (
                  <div style={props} className="columns">
                    <div className="column">
                      <div className="projects">
                        <img
                          className="projects__logo"
                          src="https://i.imgur.com/gIwA6Lk.jpg"
                          alt="Old Portfolio"
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="projects">
                        <img
                          className="projects__logo"
                          src="https://i.imgur.com/4Hp5K03.jpg"
                          alt="Madgex Assignment"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Spring>
            </article>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
