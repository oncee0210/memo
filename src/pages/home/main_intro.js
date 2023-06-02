import {
  Container,
  Wrapper,
  MainIntro,
  MainContents,
  MainInner,
  PromTextSmall,
  PromTextBig
} from '../../../styles/emt_blocks'

export default function MainIntroCompt () {
  return (
    <MainIntro>
      <Container>
        <Wrapper>
          <MainContents className="main_contents">
            <MainInner className="main_inner">
              <PromTextSmall>강원랜드 사회공헌재단</PromTextSmall>
              <PromTextBig>행복을 만들고 가치를 더하는<br/>사회공헌 전문 재단</PromTextBig>
            </MainInner>
          </MainContents>
        </Wrapper>
      </Container>
    </MainIntro>
  )
}