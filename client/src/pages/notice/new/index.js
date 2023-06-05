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

import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, ApolloProvider, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // 서버의 엔드포인트 URL을 설정합니다.
  cache: new InMemoryCache(),
});

const CREATE_NOTICE = gql`
  mutation CreateNotice($title: String!, $content: String!) {
    createNotice(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;


function NoticeNew() {
  const router = useRouter();

  const [createNotice] = useMutation(CREATE_NOTICE, {
    onCompleted: () => {
      // 공지사항 등록 성공 시 필요한 처리 작업
      router.push('/notice/list');
    },
    onError: (error) => {
      // 공지사항 등록 실패 시 필요한 처리 작업
      console.error(error);
    },
  });

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

export default function NoticeNewCompt() {
  return (
    <ApolloProvider client={client}>
      <NoticeNew />
    </ApolloProvider>
  );
}
