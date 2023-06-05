import { useRouter } from "next/router"

import {
  GnbWrap
} from '../../styles/emt_blocks'

export default function Gnb () {
  const router = useRouter();

  return (
    <>
      <nav id="gnb">
        <GnbWrap className="gnb_wrap depth1">
          <li>
            <button type="button" onClick={() => router.push("/")}>재단소개</button>
          </li>
          <li>
            <button type="button" onClick={() => router.push("/")}>주요사업</button>
          </li>
          <li>
            <button type="button" onClick={() => router.push("/notice/list")}>재단스토리</button>
          </li>
          <li>
            <button type="button" onClick={() => router.push("/")}>희망숲센터</button>
          </li>
          <li>
            <button type="button" onClick={() => router.push("/")}>자료실</button>
          </li>
        </GnbWrap>
      </nav>
    </>
  )
}
