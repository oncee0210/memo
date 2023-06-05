import {
  GnbWrap
} from '../../styles/emt_blocks'

export default function Gnb () {
  return (
    <>
      <nav id="gnb">
        <GnbWrap className="gnb_wrap depth1">
          <li>
            <a href="">재단소개</a>
          </li>
          <li>
            <a href="">주요사업</a>
          </li>
          <li>
            <a href="">재단스토리</a>
          </li>
          <li>
            <a href="">희망숲센터</a>
          </li>
          <li>
            <a href="">자료실</a>
          </li>
        </GnbWrap>
      </nav>
    </>
  )
}
