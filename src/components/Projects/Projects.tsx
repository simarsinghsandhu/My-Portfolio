import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Projects() {
  const projects = [
    {
      title: "Cost Calculator",
      description:
        "I created a simple calcualtor to measure the cost of Influencer Compaign by the no. of influencers, tier level and the activation type.",
      link: "https://costcalculators.firebaseapp.com/",
      github: null,
      skills: ["Angular", "JavaScript", "BootStrap"],
    },
    {
      title: "VN Secure",
      description:
        "I created social media monitoring and screening platform from Scratch to launch, working at Viral Nation. Success to this product gave me more confidence.",
      link: "https://www.viralnation.com/vn-secure/",
      github: null,
      skills: ["React", "TypeScript", "MUI", "Styled Components"],
    },
  ];
  return (
    <Container id="projects">
      <h2>Projects</h2>

      <div className="projects">
        {projects.map((item) => (
          <ScrollAnimation animateOnce animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b "
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {item?.github && (
                    <a
                      href="https://github.com/joaotuliojt/github-search"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  )}
                  {item?.link && (
                    <a href={item?.link} target="_blank" rel="noreferrer">
                      <img src={externalLinkIcon} alt="Visitar site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
              </div>
              {item?.skills?.length > 0 && (
                <footer>
                  <ul className="tech-list">
                    {item?.skills.map((skill) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </footer>
              )}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
