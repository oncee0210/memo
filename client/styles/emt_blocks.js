import styled from '@emotion/styled'

// Common
export const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`

export const Wrapper = styled.div`
  width: 1500px;
  max-width: 100%;
  margin: 0 auto;
`

// Header
export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 900;
  width: 100%;

  &.sub-header {
    .gnb_wrap {
      > li {
        > button {
          color: #000;
        }
      }
    }
    .all-menu-btn {
      span {
        background: #000;

        :before {
          background: #000;
        }
        :after {
          background: #000;
        }
      }
    }
  }
`

export const HeaderCt = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  .hd_logo-btn {
    display: block;
    border: 0;
    background: none;
  }
`

export const GnbWrap = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 0 50px;
  height: 100%;

  > li {
    display: flex;
    align-items: center;
    height: 100%;

    > button {
      display: block;
      border: 0;
      background: none;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      opacity: 0.75;

      :hover {
        opacity: 1;
      }
    }
  }
`

export const AllMenuBtn = styled.button`
  display: block;
  width: 22px;
  height: 26px;
  border: 0;
  background: none;

  span {
    display: block;
    position: relative;
    width: 100%;
    height: 1px;
    background: #fff;
    opacity: 0.75;

    :before {
      content: "";
      display: block;
      position: absolute;
      top: -7px;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 1px;
      background-color: #fff;
      transition: 0.3s;
    }
    :after {
      content: "";
      display: block;
      position: absolute;
      bottom: -7px;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 1px;
      background-color: #fff;
      transition: 0.3s;
    }
  }
`

// Main
export const MainIntro = styled.div`
  width: 100%;
  background: url('/images/main_section_02_bg_01_1.jpg') no-repeat center/cover;

  .main_contents {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    padding-top: 50px;
    text-align: center;

    .main_inner {
      padding: 0;
    }
  }
`

export const MainBiz = styled.div`
  background: #0a3f43;
`

export const MainContents = styled.div`
  
`

export const MainInner = styled.div`
  display: block;
  padding: 80px 0;
`

export const PromTextSmall = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
`

export const PromTextBig = styled.p`
  font-size: 60px;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
  margin-top: 30px;
`

export const MainTitleWrap = styled.div`

`

export const MainTitle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 50px;
  font-weight: 600;
  color: #fff;
`

export const MainSmTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`

export const MainTabWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const MainTabBtn = styled.button`
  font-size: 22px;
  font-weight: 600;
  color: #aaa;
  border: 0;
  background: none;

  &.on {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`

export const MainBizPostWrap = styled.div`
  margin-top: 30px;

  .swiper-slide {
    
  }
`

export const MainBizPostCard = styled.a`
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 125%;
  border-radius: 10px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
  }
`

export const MainBizPostTextWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: 10px 10px 40px 30px;
  background: rgba(0,0,0,0.5);

  .stext {
    font-size: 17px;
    font-weight: 400;
    color: #fff;
  }
  .btext {
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  }
`

export const MainStoryPostWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`

export const MainStoryPostCard = styled.a`
  display: block;
  width: calc(20% - 16px);
`

export const MainStoryPostImgWrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 55%;
  border-radius: 10px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
  }
`

export const MainStoryPostTextWrap = styled.div`
  margin-top: 20px;

  .subj {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
  .date {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #999;
  }
`

// Sub
export const SubWrap = styled.div`
  padding-top: 200px;
`

export const SubTitle = styled.div`
  font-size: 46px;
  font-weight: 700;
  color: #333;
`

export const SubContents = styled.div`
  margin-top: 50px;
`

// Board
export const BoardBtnWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 30px;
`

// > List
export const BoardListWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 40px 20px;
`

export const BoardListItem = styled.button`
  display: block;
  width: 25%;
  border: 0;
  background: #eee;

  .subj {
    font-size: 18px;
    font-weight: 400;
    color: #333;
  }
  .date {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #999;
  }
`



// > Register