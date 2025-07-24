import { Container } from "./styles"
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll"

export function Projects() {
  const projects = [
    {
      title: "Investor Dashboard",
      description:
        "A responsive React application that enables users to register and authenticate, to view a dashboard summary, manage transactions and download reports.",
      link: "https://investor-project-frontend.vercel.app/",
      github: "https://github.com/simarsinghsandhu/Investor-Project-Frontend",
      skills: ["React", "JavaScript", "Material UI"],
    },
    {
      title: "Investor Dashboard Backend",
      description:
        "This project is a simple user authentication backend with SQLite database and JWT token-based authorization. It includes APIs for user registration, login, transactions (CRUD), reports, and portfolio summary.",
      link: null,
      github: "https://github.com/simarsinghsandhu/Investor-Project-Backend",
      skills: ["Node.js", "Express.js", "SQLite3", "JWT"],
    },
    {
      title: "VN Secure",
      description:
        "Designed and developed a social media monitoring and screening platform from the ground up while working at Viral Nation. The success of this project significantly contributed to team confidence and the product’s impact within the organization.",
      link: "https://secure.vntech.io/",
      github: null,
      skills: ["React", "TypeScript", "MUI", "Styled Components"],
    },
    {
      title: "Cost Calculator",
      description:
        "A web-based calculator designed to estimate the cost of influencer marketing campaigns based on the number of influencers, tier levels, and activation types.",
      link: "https://costcalculators.firebaseapp.com/",
      github: null,
      skills: ["Angular", "JavaScript", "BootStrap"],
    },
  ]
  return (
    <Container id='projects'>
      <h2>Projects</h2>

      <div className='projects'>
        {projects.map((item) => (
          <ScrollAnimation animateOnce animateIn='flipInX'>
            <div className='project'>
              <header>
                <svg
                  width='50'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#23ce6b '
                  stroke-width='1'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <title>Folder</title>
                  <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                </svg>
                <div className='project-links'>
                  {item?.github && (
                    <a href={item?.github} target='_blank' rel='noreferrer'>
                      <img src={githubIcon} alt='GitHub' />
                    </a>
                  )}
                  {item?.link && (
                    <a href={item?.link} target='_blank' rel='noreferrer'>
                      <img src={externalLinkIcon} alt='Visitar site' />
                    </a>
                  )}
                </div>
              </header>
              <div className='body'>
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
              </div>
              {item?.skills?.length > 0 && (
                <footer>
                  <ul className='tech-list'>
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
  )
}
