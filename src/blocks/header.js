import {
  Container,
  HeaderWrap,
  HeaderCt,
  AllMenuBtn
} from '../../styles/emt_blocks'

import Gnb from './gnb'

export default function Header () {
  return (
    <>
      <HeaderWrap>
        <Container>
          <HeaderCt>
            <h1>
              <a href="">
                <img src="/logo_w.png" alt="로고" />
              </a>
            </h1>
            <Gnb></Gnb>
            <AllMenuBtn type="button">
              <span></span>
            </AllMenuBtn>
          </HeaderCt>
        </Container>
      </HeaderWrap>
    </>
  )
}