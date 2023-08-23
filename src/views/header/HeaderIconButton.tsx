import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import { StyledIconButton } from "../StyledComponents/header/HeaderStyled";



export default function HeaderIconButton() {
  
  return (
    <>
      <StyledIconButton><LightModeIcon fontSize="large"/></StyledIconButton>
      <StyledIconButton><GitHubIcon fontSize="large"/></StyledIconButton>
    </>
  )
}