import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <p>Hi 👋, I am</p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={0.2 * 500}>
          <h1>Simar Singh Sandhu</h1>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={0.4 * 500}>
          <h3>Lead Software Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={0.6 * 500}>
          <p className="small-resume">
            I bring more than 3 years of experience building complex software
            applications using React and React Native. I have a strong
            proficiency in software design and architecture, full-stack
            development, and team management. Throughout my career, I have
            demonstrated the ability to lead cross-functional teams of 10 to 15
            developers and collaborate effectively with stakeholders to deliver
            high-quality software products.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={0.8 * 500}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact Me
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateOnce animateIn="fadeInRight" delay={1 * 500}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
