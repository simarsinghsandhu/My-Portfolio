import { Container } from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Simar</span>
      </a>
      <div>
        <p>
          This site was made with <img src={reactIcon} alt="React" /> by Simar
          Singh Sandhu
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/simar-singh-sandhu/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/simarsinghsandhu"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/simar.singh.sandhu/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
