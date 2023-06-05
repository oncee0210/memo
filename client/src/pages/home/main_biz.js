import {
  Container,
  Wrapper,
  MainBiz,
  MainContents,
  MainInner,
  MainTitleWrap,
  MainTitle,
  MainSmTitle,
  MainBizPostWrap,
  MainBizPostCard,
  MainBizPostTextWrap
} from '../../../styles/emt_blocks'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

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
              <MainBizPostWrap>
                <Swiper
                  id="main_biz-slider"
                  spaceBetween={40}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  //onSlideChange={() => console.log('slide change')}
                  //onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_01-1.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">복지사업</p>
                        <p className="btext">기본생활향상사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_02.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">복지사업</p>
                        <p className="btext">복지인프라지원사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_03.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">복지사업</p>
                        <p className="btext">진폐재해자활력증진사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_04.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">복지사업</p>
                        <p className="btext">순직유가족지원사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_05.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">마을활성화사업</p>
                        <p className="btext">일자리지원사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_06.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">마을활성화사업</p>
                        <p className="btext">마을활력지원사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_07.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">마을활성화사업</p>
                        <p className="btext">마을경제지원사업</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                  <SwiperSlide>
                    <MainBizPostCard href="">
                      <img src="/images/main_section_03_img_08.jpg" alt=""/>
                      <MainBizPostTextWrap>
                        <p className="stext">자립지원사업</p>
                        <p className="btext">하이원베이커리</p>
                      </MainBizPostTextWrap>
                    </MainBizPostCard>
                  </SwiperSlide>
                </Swiper>
              </MainBizPostWrap>
            </MainInner>
          </MainContents>
        </Wrapper>
      </Container>
    </MainBiz>
  )
}