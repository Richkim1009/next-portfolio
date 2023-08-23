import { Typography } from "@mui/material"
import Image from 'next/image'
import { StyledContainer, UnderLineText } from "../StyledComponents/body/BodyStyled"
import { useVisible } from "@/utils/customHook/useVisible";

export default function Intro() {
  const [isVisible, elementRef] = useVisible() 

  return (
    <div ref={elementRef} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <StyledContainer>
        <UnderLineText variant="h3">
          INTRO
        </UnderLineText>
        <div style={{ display: 'flex '}}>
          <Typography variant="h5">
            <strong>호기심이 많은 개발자</strong>
            <div>
              <Typography variant="body1">
                Javascript & TypeScript 기반의 2년차 풀스택 개발자 <strong>김부익</strong> 입니다.
                <br />
                현재 제이앤 퍼스트라는 회사에서 글로벌 메신저 서비스인 <strong style={{ color: 'green' }}>라인</strong> 백오피스 전문 개발자로 일하고 있습니다.
                <br />
                제가 개발자로서 가진 가장 큰 특징은 끝없는 호기심입니다.
                <br />
                이런 호기심 때문에 항상 새로운 기술과 지식을 탐구하는 것을 즐깁니다.
                <br />
                이러한 탐구 정신은 곧 열정적인 공부로 이어지며, 그 결과로 다양한 지식을 습득하게 되었습니다.
                <br />
                그렇기에 제 호기심은 단순한 관심 그 이상으로, 제 전문성을 끊임없이 키워나가는 원동력이 되어왔습니다.
              </Typography>
            </div>
          </Typography>
          <Image style={{ position: 'inherit' }} key={"/image/github.png"} width={200} height={200} src="/image/github.png" alt={"test"} />
        </div>
      </StyledContainer>
    </div>
  )
}