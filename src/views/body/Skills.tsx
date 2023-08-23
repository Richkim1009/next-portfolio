import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyledContainer, StyledTableCell, StyledTableRow, UnderLineText } from "../StyledComponents/body/BodyStyled";
import { useVisible } from "@/utils/customHook/useVisible";

function createData(
  name: string,
  image: string,
  experience: string,
  year: number,
) {
  return { name, image, experience, year };
}

const rows = [
  createData('JavaScript', '', 'ES6를 이용하고, 비동기가 사용하기 쉬워 현업에서 사용중입니다.', 2),
  createData('TypeScript', '', 'JS에 정적 타이핑을 추가해 코드의 안정성을 높이고, 런타임 오류를 줄일수 있어서 현업에서 주로 사용합니다.', 2),
  createData('C', '', '로우 레벨에 가장 가까운 언어로서 메모리 관리와 컴퓨터 내부동작에 대해서 알 수 있게되어 개인적으로 공부했습니다.', 2),
  createData('Rust', '', '최근에 공부하게 된 언어로 강력한 타입추론, 안정적인 메모리관리, 스레드 세이프 한 언어로 많은 프로그래밍 패러다임을 받아드려 개인적으로 공부중 입니다.', 0)
];

export default function Skills() {
  const [isVisible, elementRef] = useVisible()

  return (
    <StyledContainer ref={elementRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <UnderLineText variant="h3">
        SKILLS
      </UnderLineText>
      <TableContainer component={Paper} sx={{ width: '80%', minWidth: 600 }}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">기술</StyledTableCell>
              <StyledTableCell align="center">-</StyledTableCell>
              <StyledTableCell align="center">사용 경험 및 이유</StyledTableCell>
              <StyledTableCell align="center">사용 기간</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.image}</StyledTableCell>
                <StyledTableCell align="center">{row.experience}</StyledTableCell>
                <StyledTableCell align="center">{row.year}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  )
}