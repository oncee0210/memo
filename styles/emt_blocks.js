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
  height: 98px;
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
export const MainSection1 = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/main_section_02_bg_01_1.jpg') no-repeat center/cover;
`

export const MainContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const MainInner = styled.div`
  display: block;
  text-align: center;
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