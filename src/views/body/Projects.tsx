import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { StyledContainer, StyledTableCell, StyledTableRow, UnderLineText } from "../StyledComponents/body/BodyStyled";
import { Fragment } from "react";
import { useVisible } from "@/utils/customHook/useVisible";

function createData(
  name: string,
  skills: string[],
  describe: string[],
  service: string,
) {
  return { name, skills, describe, service };
}

const rows = [
  createData('C-WebServer', ['C', 'Socket'], ['C를 이용한 소켓프로그래밍입니다.', 'GET요청에 의한 html, image, javscript파일을 서빙할 수 있습니다.'], '서비스'),
  createData('C-WebServer-kqueue', ['C', 'Socket', 'I/O Multiflexing'], 
  ['C를 이용한 소켓프로그래밍입니다.', 'GET요청에 의한 html, image, javscript파일을 서빙할 수 있습니다.', 'kqueue를 이용한 I/O Multifexing을 지원합니다.'], '서비스'),
];

export default function Projects() {
  const [isVisible, elementRef] = useVisible()

  return (
    <StyledContainer ref={elementRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <UnderLineText variant="h3">
        PROJECTS
      </UnderLineText>
      <TableContainer component={Paper} sx={{ width: '80%', minWidth: 600 }}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">프로젝트</StyledTableCell>
              <StyledTableCell align="center">기술사용</StyledTableCell>
              <StyledTableCell align="center">내용</StyledTableCell>
              <StyledTableCell align="center">정보</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.skills.reduce((res, cur) => `${res}, ${cur}`)}</StyledTableCell>
                <StyledTableCell align="center">{row.describe.map(cur => <Fragment key={cur}>{cur}<br /></Fragment>)}</StyledTableCell>
                <StyledTableCell align="center">{row.service}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  )
}