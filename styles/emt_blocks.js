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
`

export const HeaderCt = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;
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

    > a {
      display: block;
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
  background: url('/main_section_02_bg_01_1.jpg') no-repeat center/cover;

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

export const MainBizPost = styled.div`
  margin-top: 30px;
`

export const MainBizPostWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const MainBizPostItem = styled.div`
  flex-basis: calc(100% / 4 - 22.5px);
  height: 0;
  padding-bottom: 30%;
  background: #e5e5e5;
`