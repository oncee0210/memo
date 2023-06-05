import { useRouter } from 'next/router';
import {
  Container,
  Wrapper,
  SubWrap,
  SubTitle,
  SubContents,
  BoardBtnWrap
} from '../../../../styles/emt_blocks'

import {
  Button,
  Form,
  Input
} from 'antd';
const { TextArea } = Input;

export default function NoticeNewCompt() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNotice({ variables: { title, content } });
  };

  return (
    <Container>
      <Wrapper>
        <SubWrap>
          <SubTitle>공지사항 글쓰기</SubTitle>

          <SubContents>
            <Form
              layout="vertical"
              size="large"
              onSubmit={handleSubmit}
            >
              <Form.Item>
                <Input name="subject" placeholder="제목" />
              </Form.Item>
              <Form.Item>
                <TextArea
                  name="content"
                  placeholder="내용"
                  autoSize={{
                    minRows: 6,
                    maxRows: 6,
                  }}
                />
              </Form.Item>
              <BoardBtnWrap>
                <Button type="primary" danger onClick={()=>router.push('/notice/list')}>취소하기</Button>
                <Button type="primary" htmlType="submit">등록하기</Button>
              </BoardBtnWrap>
            </Form>
          </SubContents>
        </SubWrap>
      </Wrapper>
    </Container>
  )
}