import {
  Container,
  Wrapper,
  MainBiz,
  MainContents,
  MainInner,
  MainTitleWrap,
  MainTitle,
  MainSmTitle,
  MainBizPost,
  MainBizPostWrap,
  MainBizPostItem
} from '../../../styles/emt_blocks'

export default function MainBizCompt () {
  return (
    <MainBiz>
      <Container>
        <Wrapper>
          <MainContents className="main_contents">
            <MainInner className="main_inner">
              <MainTitleWrap>
                <MainTitle>주요사업</MainTitle>
                <MainSmTitle>재단은 전략적 사회공헌을 통해 <br/>지속가능한 지역을 만들어가는데 기여합니다.</MainSmTitle>
              </MainTitleWrap>
              <MainBizPost>
                <MainBizPostWrap>
                  <MainBizPostItem></MainBizPostItem>
                  <MainBizPostItem></MainBizPostItem>
                  <MainBizPostItem></MainBizPostItem>
                  <MainBizPostItem></MainBizPostItem>
                  <MainBizPostItem></MainBizPostItem>
                  <MainBizPostItem></MainBizPostItem>
                </MainBizPostWrap>
              </MainBizPost>
            </MainInner>
          </MainContents>
        </Wrapper>
      </Container>
    </MainBiz>
  )
}