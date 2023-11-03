import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import profileImage from "../../assets/profile.png";
import { Grid } from "@mui/material";

export function About() {
  return (
    <Container id="aboutme">
      <div className="about-text">
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <h2>About Me</h2>
        </ScrollAnimation>
        {/* <ScrollAnimation animateOnce  animateOnce animateIn="fadeInUp" delay={0.2 * 500}>
          <p>
            As a Lead Software Engineer, I bring more than 2 years of experience building
            complex software applications using React and React Native. I have a
            strong proficiency in software design and architecture, full-stack
            development, and team management. Throughout my career, I have
            demonstrated the ability to lead cross-functional teams of 10 to 15
            developers and collaborate effectively with stakeholders to deliver
            high-quality software products.
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          delay={0.4 * 500}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I am particularly skilled in designing and implementing efficient
            and scalable software architectures that are both maintainable and
            user-friendly. I am also experienced in leveraging agile
            methodologies to streamline development processes and ensure the
            timely delivery of projects.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUp"
          delay={0.6 * 500}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My expertise in team management includes mentoring and coaching team
            members, conducting performance evaluations, and facilitating
            effective communication between teams. I take pride in delivering
            software products that exceed customer expectations while adhering
            to best practices and industry standards.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={0.6 * 500}>
          <p>
            If given the opportunity, I am confident that I can help your
            organization build exceptional software products that meet and
            surpass business goals.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateOnce animateIn="fadeInRight" delay={0.6 * 500}>
          <img
            style={{
              maxWidth: "100%",
              width: "300px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={profileImage}
            alt="Simar"
          />
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={0.7 * 500}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.1 * 500}
              >
                <img
                  src={reactIcon}
                  alt="React"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>

            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.2 * 500}
              >
                <img
                  src={vueIcon}
                  alt="Vue"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>

            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.3 * 500}
              >
                <img
                  src={jsIcon}
                  alt="JavaScript"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>

            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.4 * 500}
              >
                <img
                  src={htmlIcon}
                  alt="Html"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>

            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.5 * 500}
              >
                <img
                  src={cssIcon}
                  alt="Css"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>
            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.6 * 500}
              >
                <img
                  src={nodeIcon}
                  alt="Node"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>

            <Grid item>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUp"
                delay={0.7 * 500}
              >
                <img
                  src={typescriptIcon}
                  alt="Typescript"
                  style={{ width: "50px", height: "50px" }}
                />
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
