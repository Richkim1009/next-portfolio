import { Paper, Typography } from "@mui/material"
import { StyledContainer, UnderLineText } from "../StyledComponents/body/BodyStyled"
import { useVisible } from "@/utils/customHook/useVisible";

export default function Contact() {
    const [isVisible, elementRef] = useVisible()

    return (
        <div ref={elementRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <StyledContainer>
                <UnderLineText variant="h3">
                    CONTACT
                </UnderLineText>
                <div>
                    <Paper sx={{ maxWidth: '400px', textAlign: 'center' }}>
                        <Typography variant="h4" component={Paper}>
                            <strong>KIM BU IK</strong>
                            <ul style={{ textAlign: 'left', fontSize: '15px', marginLeft: '4rem'}}>
                                <li>Position: Developer & Researcher</li>
                                <li>E-Mail: lofend1009@gmail.com</li>
                            </ul>
                            <Typography>사용자의 입장에서 개발하는 개발자가 되겠습니다.</Typography>
                        </Typography>
                    </Paper>
                </div>
            </StyledContainer>
        </div>
    )
}