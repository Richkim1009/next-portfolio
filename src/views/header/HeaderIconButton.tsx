import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import { StyledIconButton } from "../StyledComponents/header/HeaderStyled";

export default function HeaderIconButton() {
  return (
    <>
      <StyledIconButton><LightModeIcon fontSize="large" /></StyledIconButton>
      <StyledIconButton>
        <a href='https://github.com/Richkim1009/' target='_blank'>
          <GitHubIcon fontSize="large" />
        </a>
      </StyledIconButton>
    </>
  )
}