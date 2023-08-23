import { useVisible } from "@/utils/customHook/useVisible"
import { StyledContainer, UnderLineText } from "../StyledComponents/body/BodyStyled"
import { useState } from "react";
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";

const steps = [
    {
        label: '2021-11',
        description: `제이앤퍼스트 입사`,
    },
    {
        label: '2021-12',
        description:
            '회사에서 프론트엔드로 첫 프로젝트 시작',
    },
    {
        label: '2022-03',
        description: `2번째 프로젝트 시작`,
    },
];

export default function Retrospective() {
    const [isVisible, elementRef] = useVisible()
    const [activeStep, setActiveStep] = useState(0);

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
        <div ref={elementRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <StyledContainer>
                <UnderLineText variant="h3">
                    RETROSPECTIVE
                </UnderLineText>
                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    optional={
                                        index === 2 ? (
                                            <Typography variant="caption">Last step</Typography>
                                        ) : null
                                    }
                                >
                                    {step.label}
                                </StepLabel>
                                <StepContent>
                                    <Typography>{step.description}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1, backgroundColor: 'black' }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1, backgroundColor: 'black', color: 'white' }}
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
                            <Typography>끝</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1, color: 'black' }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
            </StyledContainer>
        </div>
    )
}