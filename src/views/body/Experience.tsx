import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyledContainer, StyledTableCell, StyledTableRow, UnderLineText } from "../StyledComponents/body/BodyStyled";
import { useVisible } from "@/utils/customHook/useVisible";

function createData(
  name: string,
  work: string,
  detail: string,
  service: string,
) {
  return { name, work, detail, service };
}

const rows = [
  createData('제이앤 퍼스트', '백오피스 프론트', '헬로', '서비스'),
];

export default function Experience() {
  const [isVisible, elementRef] = useVisible()

  return (
    <StyledContainer ref={elementRef} className={`fade-in ${isVisible ? 'visible' : ''}`} >
      <UnderLineText variant="h3">
        EXPERIENCE
      </UnderLineText>
      <TableContainer component={Paper} sx={{ width: '80%', minWidth: 600}}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">회사</StyledTableCell>
              <StyledTableCell align="center">업무</StyledTableCell>
              <StyledTableCell align="center">세부 내용</StyledTableCell>
              <StyledTableCell align="center">서비스 정보</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.work}</StyledTableCell>
                <StyledTableCell align="center">{row.detail}</StyledTableCell>
                <StyledTableCell align="center">{row.service}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  )
}