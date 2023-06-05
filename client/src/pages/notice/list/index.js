import { useRouter } from 'next/router'
import {
  Container,
  Wrapper,
  SubWrap,
  SubTitle,
  SubContents,
  BoardListWrap,
  BoardListItem,
  BoardBtnWrap
} from '../../../../styles/emt_blocks'

import {
  Button
} from 'antd';

export default function NoticeListCompt() {
  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <SubWrap>
          <SubTitle>공지사항</SubTitle>

          <SubContents>
            <BoardListWrap>
              <BoardListItem>
                <p class="subj">임시 게시글1</p>
                <p class="date">2023-01-01</p>
              </BoardListItem>
              <BoardListItem>
                <p class="subj">임시 게시글2</p>
                <p class="date">2023-01-01</p>
              </BoardListItem>
            </BoardListWrap>

            <BoardBtnWrap>
              <Button type="primary" onClick={()=>router.push('/notice/new')}>글쓰기</Button>
            </BoardBtnWrap>
          </SubContents>
        </SubWrap>
      </Wrapper>
    </Container>
  )
}
