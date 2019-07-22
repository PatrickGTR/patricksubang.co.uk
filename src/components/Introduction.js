import React, { useState } from "react";
import PageLayout from "./PageLayout";

import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

import { FaGithubSquare, FaEnvelopeSquare, FaBook } from "react-icons/fa";

const AnimatedZoom = ({ children, scale = 1.5 }) => {
  const [hover, setHover] = useState(false);
  const props = useSpring({ transform: `scale(${hover ? scale : 1})` });
  return (
    <animated.span
      style={props}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {children}
    </animated.span>
  );
};

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
                  "is-centered",
                ].join(" ")}
              >
                About me
              </h1>
              <strong>Hey there!</strong>
              I love programming and hoping to make a career out of it, I love
              building and designing websites. I love learning new things
              whether it comes to programming or fitness and do it to my best
              ability.
              <br /> I'm originally from Philippines but currently residing in
              the county of East Sussex, United Kingdom.
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
                  "is-centered",
                ].join(" ")}
              >
                Contact me!
              </h1>
              <div className="social">
                <AnimatedZoom>
                  <span>
                    <a
                      href="https://www.github.com/PatrickGTR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithubSquare size="3em" />
                      <p>Github</p>
                    </a>
                  </span>
                </AnimatedZoom>
                <AnimatedZoom>
                  <span>
                    <a
                      href="mailto:patricksubang@live.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelopeSquare size="3em" />
                      <p>Email</p>
                    </a>
                  </span>
                </AnimatedZoom>
                <AnimatedZoom>
                  <span>
                    <a
                      href="https://www.patrickgtr.ml/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBook size="3em" />
                      <p>Resume</p>
                    </a>
                  </span>
                </AnimatedZoom>
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
                className={[
                  "content__title",
                  "title",
                  "title--white",
                  "is-centered",
                ].join(" ")}
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
                        <AnimatedZoom scale={1.1}>
                          <figure>
                            <a href="https://fnstats.now.sh/">
                              <img
                                className="projects__logo"
                                src="https://i.imgur.com/KV6uXsE.jpg"
                                alt="Fortnite Stats"
                              />
                            </a>
                            <figcaption>
                              Project done in React and Next to show Fortnite
                              player statistics, news and item shop.
                            </figcaption>
                          </figure>
                        </AnimatedZoom>
                      </div>
                    </div>
                    <div className="column">
                      <div className="projects">
                        <AnimatedZoom scale={1.1}>
                          <figure>
                            <a href="https://ucpdemo.herokuapp.com">
                              <img
                                className="projects__logo"
                                src="https://i.imgur.com/d8RmeyB.jpg"
                                alt="User Control Panel"
                              />
                            </a>
                            <figcaption>
                              A User control panel made in Flask and Python. It
                              has basic login system that allows user to look at
                              their in-game statistics. It also has a basic CMS
                              which allows admins to post/delete/edit news which
                              is shown on website's front page.
                            </figcaption>
                          </figure>
                        </AnimatedZoom>
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
                        <AnimatedZoom scale={1.1}>
                          <figure>
                            <a href="https://portfolio.patricksubang.now.sh/">
                              <img
                                className="projects__logo"
                                src="https://i.imgur.com/rNKO8Fb.jpg"
                                alt="Portfolio Template"
                              />
                            </a>
                            <figcaption>
                              A simple elegant portfolio template made with
                              React and Next
                            </figcaption>
                          </figure>
                        </AnimatedZoom>
                      </div>
                    </div>
                    <div className="column">
                      <div className="projects">
                        <AnimatedZoom scale={1.1}>
                          <figure>
                            <a href="https://www.patrickgtr.ml/rockfordrp/">
                              <img
                                className="projects__logo"
                                src="https://i.imgur.com/EMtU2yD.jpg"
                                alt="Rockford Roleplay Website"
                              />
                            </a>
                            <figcaption>
                              A responsive design made of HTML5 and CSS3 made
                              for GTA V Multiplayer server.
                            </figcaption>
                          </figure>
                        </AnimatedZoom>
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
                        <AnimatedZoom scale={1.1}>
                          <figure>
                            <a href="https://www.patrickgtr.ml/">
                              <img
                                className="projects__logo"
                                src="https://i.imgur.com/gIwA6Lk.jpg"
                                alt="Old Portfolio"
                              />
                            </a>
                            <figcaption>
                              My old portfolio (My very first website)
                            </figcaption>
                          </figure>
                        </AnimatedZoom>
                      </div>
                    </div>
                    <div className="column">
                      <div className="projects">
                        <AnimatedZoom scale={1.1}>
                          <figure>
                            <a href="https://www.patrickgtr.ml/Madgex">
                              <img
                                className="projects__logo"
                                src="https://i.imgur.com/4Hp5K03.jpg"
                                alt="Madgex Assignment"
                              />
                            </a>
                            <figcaption>
                              An assignment task set by Madgex, to convert an
                              image of a web design into HTML/CSS/JS
                            </figcaption>
                          </figure>
                        </AnimatedZoom>
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
