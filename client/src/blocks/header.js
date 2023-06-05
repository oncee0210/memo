import { useRouter } from 'next/router';

import {
  Container,
  HeaderWrap,
  HeaderCt,
  AllMenuBtn
} from '../../styles/emt_blocks'

import Gnb from './gnb'

export default function Header () {
  const router = useRouter();
  const currentPath = router.pathname;
  let addHeadClass = "";

  if (currentPath !== '/') {
    addHeadClass = "sub-header";
  }

  return (
    <>
      <HeaderWrap className={addHeadClass}>
        <Container>
          <HeaderCt>
            <h1>
              <button type="button" className="hd_logo-btn" onClick={()=>router.push('/')}>
                {currentPath !== '/' ? (
                  <img src="/images/logo.png" alt="로고" />
                ) : (
                  <img src="/images/logo_w.png" alt="로고" />
                )}
              </button>
            </h1>
            <Gnb></Gnb>
            <AllMenuBtn type="button" className="all-menu-btn">
              <span></span>
            </AllMenuBtn>
          </HeaderCt>
        </Container>
      </HeaderWrap>
    </>
  )
}