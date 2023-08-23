import { Container, TableCell, TableRow, Typography, styled, tableCellClasses } from "@mui/material";

export const UnderLineText = styled(Typography)({
  marginTop: '3rem',
  marginBottom: '3rem',
  textDecoration: 'underline'
})

export const BodyDiv = styled('div')({
  marginLeft: '10rem',
  marginBottom: '4rem',
  animation: 'fadein',
  transition: 'opacity 0.5s ease 0.2',
})

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const StyledContainer = styled(Container)({
  margin: '0 0 5% 20%'
})

  // < Container ref = { elementRef } className = {`fade-in ${isVisible ? 'visible' : ''}`} sx = {{ marginLeft: '20%', marginBottom: '5%' }}>