import { StyledButton } from "../StyledComponents/header/HeaderStyled";

export default function HeaderButton({ name }: { name: string }) {
  
  return <StyledButton color="inherit" variant="text">{name}</StyledButton>
}