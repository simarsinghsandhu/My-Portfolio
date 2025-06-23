import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import * as React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepContent from "@mui/material/StepContent"
import Button from "@mui/material/Button"
import { Avatar, Grid } from "@mui/material"
import VNLogo from "../../assets/VN.png"
import AdvantaLogo from "../../assets/Advanta.png"
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord"

const steps = [
  {
    id: 4,
    title: "Senior Software Engineer",
    subtitle: `Viral Nation Inc, 317 Adelaide St W (6th Floor) - Toronto`,
    time: "Aug 2024 – Feb 2025",
    is_present: false,
    image: VNLogo,
    bullets: [
      "Conducted performance optimization by implementing progressive web app techniques, significantly reducing load times and enhancing user engagement.",
      "Implemented best practices and guidelines through code reviews and unit testing (Jest).",
      "Introduced reusable UI component library, reducing front-end bugs by 35%.",
      "Maintained documentation for onboarding, code conventions, and CI/CD pipeline usage.",
    ],
  },
  {
    id: 3,
    title: "Lead Software Engineer",
    subtitle: `Viral Nation Inc, 317 Adelaide St W (6th Floor) - Toronto`,
    time: "Jan 2023 – Aug 2024",
    is_present: false,
    image: VNLogo,
    bullets: [
      "Led development across multiple micro-frontend apps, using GraphQL and TypeScript.",
      "Spearheaded migration from legacy Angular codebase to React, reducing technical debt by 60%.",
      "Oversaw 30+ technical interviews, code reviews, and team mentorship to enhance code quality.",
      "Delivered features on time using agile sprint planning and constant communication with PMs.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    subtitle: `Viral Nation Inc, 317 Adelaide St W (6th Floor) - Toronto`,
    time: "Oct 2021 – Jan 2023",
    is_present: false,
    image: VNLogo,
    bullets: [
      "Developed single page web applications using React, Redux, & REST APIs.",
      "Implemented mobile-first design principles for responsive layouts.",
      "Utilized Chrome DevTools for debugging and performance analysis.",
      "Collaborated closely with UI/UX designers and QA to improve design-to-code accuracy.",
    ],
  },
  {
    id: 1,
    title: "Front-End Developer",
    subtitle: `Advanta Innovations, Advanta Rapid ERP,  Remote - Toronto`,
    time: "Jun 2020 – Oct 2021",
    is_present: false,
    image: AdvantaLogo,
    bullets: [
      "Maintained legacy web application code using HTML5, CSS3, JavaScript, Nodes Js, Angular and Bootstrap.",
      "Implemented RESTful APIs and new features, by participating in the agile development process, utilizing JIRA and Confluence for project management.",
    ],
  },
]

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Grid item xs={12}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              StepIconComponent={() => (
                <Avatar
                  variant='rounded'
                  sx={{ width: "50px", height: "50px" }}
                  src={step?.image}
                />
              )}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveStep(index)}
            >
              <Grid container justifyContent='space-between'>
                <Grid item>
                  <h3>{step.title}</h3>
                </Grid>
                <Grid item>
                  <div className='text'>
                    {step.time}
                    {step?.is_present && <span>Present</span>}
                  </div>
                </Grid>
              </Grid>
              <div className='text'>{step.subtitle}</div>
            </StepLabel>
            <StepContent>
              {step?.bullets?.map((bullet: any) => (
                <div className='text' style={{ opacity: 0.7, margin: "8px" }}>
                  <Grid container alignItems='center' spacing={1}>
                    <Grid item>
                      <FiberSmartRecordIcon color='secondary' />
                    </Grid>
                    <Grid item xs>
                      {bullet}
                    </Grid>
                  </Grid>
                </div>
              ))}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    size='large'
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    size='large'
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div className='project'>
          <p>
            Based on my experience and skillset, I am confident in my ability to
            excel as a senior software engineer. Through my experience, i have a
            proven track record of delivering high-quality code that meets
            business objectives. Additionally, my strong problem-solving
            abilities, attention to detail, and passion for learning make me
            well-suited for the constantly-evolving field of software
            engineering.
          </p>
        </div>
      )}
    </Grid>
  )
}

export function Experience() {
  return (
    <Container id='experience'>
      <h1>Experience</h1>
      <ScrollAnimation animateOnce animateIn='fadeInUp'>
        <Grid container justifyContent='center'>
          <Grid xs={12} lg={8}>
            <VerticalLinearStepper />
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Container>
  )
}
