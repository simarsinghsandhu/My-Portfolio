import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { width } from "@mui/system";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid item xs={12}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={}>
              <h3>{step.label}</h3>
              <h2>{step.label}</h2>
            </StepLabel>
            <StepContent>
              <p>{step.description}</p>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    size="large"
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    size="large"
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
        <Paper square elevation={0} sx={{ p: 3 }}>
          <p>
            Based on my experience and skillset, I am confident in my ability to
            excel as a senior software engineer. Through my experience, i have a
            proven track record of delivering high-quality code that meets
            business objectives. Additionally, my strong problem-solving
            abilities, attention to detail, and passion for learning make me
            well-suited for the constantly-evolving field of software
            engineering.
          </p>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} size="large">
            Re-View Experience
          </Button>
        </Paper>
      )}
    </Grid>
  );
}

export function Experience() {
  return (
    <Container id="experience">
      <h2>Experience</h2>
      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <Grid container>
          <VerticalLinearStepper />
        </Grid>
      </ScrollAnimation>
    </Container>
  );
}
