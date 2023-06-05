import {
  Container,
  Wrapper,
  MainBiz,
  MainContents,
  MainInner,
  MainTitleWrap,
  MainTitle,
  MainSmTitle,
  MainTabWrap,
  MainTabBtn,
  MainStoryPostWrap,
  MainStoryPostCard,
  MainStoryPostImgWrap,
  MainStoryPostTextWrap
} from '../../../styles/emt_blocks'

export default function MainStoryCompt () {
  return (
    <MainBiz>
      <Container>
        <Wrapper>
          <MainContents className="main_contents">
            <MainInner className="main_inner">
              <MainTitleWrap>
                <MainTitle>
                  재단스토리
                  <MainTabWrap>
                    <MainTabBtn className="on">공지사항</MainTabBtn>
                    <MainTabBtn>보도자료</MainTabBtn>
                    <MainTabBtn>현장소식</MainTabBtn>
                  </MainTabWrap>
                </MainTitle>
              </MainTitleWrap>
              <MainStoryPostWrap>
                <MainStoryPostCard href="">
                  <MainStoryPostImgWrap>
                    <img src="/images/main_section_03_img_01-1.jpg" alt=""/>
                  </MainStoryPostImgWrap>
                  <MainStoryPostTextWrap>
                    <p className="subj">기본생활향상사업</p>
                    <p className="date">2023-05-15</p>
                  </MainStoryPostTextWrap>
                </MainStoryPostCard>
                <MainStoryPostCard href="">
                  <MainStoryPostImgWrap>
                    <img src="/images/main_section_03_img_02.jpg" alt=""/>
                  </MainStoryPostImgWrap>
                  <MainStoryPostTextWrap>
                    <p className="subj">복지인프라지원사업</p>
                    <p className="date">2023-05-15</p>
                  </MainStoryPostTextWrap>
                </MainStoryPostCard>
                <MainStoryPostCard href="">
                  <MainStoryPostImgWrap>
                    <img src="/images/main_section_03_img_03.jpg" alt=""/>
                  </MainStoryPostImgWrap>
                  <MainStoryPostTextWrap>
                    <p className="subj">진폐재해자활력증진사업</p>
                    <p className="date">2023-05-15</p>
                  </MainStoryPostTextWrap>
                </MainStoryPostCard>
                <MainStoryPostCard href="">
                  <MainStoryPostImgWrap>
                    <img src="/images/main_section_03_img_04.jpg" alt=""/>
                  </MainStoryPostImgWrap>
                  <MainStoryPostTextWrap>
                    <p className="subj">순직유가족지원사업</p>
                    <p className="date">2023-05-15</p>
                  </MainStoryPostTextWrap>
                </MainStoryPostCard>
                <MainStoryPostCard href="">
                  <MainStoryPostImgWrap>
                    <img src="/images/main_section_03_img_05.jpg" alt=""/>
                  </MainStoryPostImgWrap>
                  <MainStoryPostTextWrap>
                    <p className="subj">일자리지원사업</p>
                    <p className="date">2023-05-15</p>
                  </MainStoryPostTextWrap>
                </MainStoryPostCard>
              </MainStoryPostWrap>
            </MainInner>
          </MainContents>
        </Wrapper>
      </Container>
    </MainBiz>
  )
}