import {
  Container,
  Wrapper,
  MainSection1,
  MainContents,
  MainInner,
  PromTextSmall,
  PromTextBig
} from '../../../styles/emt_blocks'

export default function Main () {
  return (
    <>
      <MainSection1>
        <Container>
          <Wrapper>
            <MainContents className="main_contents">
              <MainInner>
                <PromTextSmall>강원랜드 사회공헌재단</PromTextSmall>
                <PromTextBig>행복을 만들고 가치를 더하는<br/>사회공헌 전문 재단</PromTextBig>
              </MainInner>
            </MainContents>
          </Wrapper>
        </Container>
      </MainSection1>
    </>
  )
}