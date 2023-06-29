import styled from '@emotion/styled';
import {
  Wrapper,
  Navigation,
  Logo,
  Search,
  Input,
  NavBtn,
  Category,
  Container,
  BigTitle,
  Contents,
  Span,
  Item,
  Info,
  Tag,
  Tags,
} from './Community.style';

function Community() {
  return (
    <Wrapper>
      <Navigation>
        <Logo>로고</Logo>
        <Search>
          <Input></Input>
          <NavBtn>버튼</NavBtn>
        </Search>
        <Category>
          <NavBtn>카테고리버튼</NavBtn>
          <NavBtn>카테고리버튼</NavBtn>
        </Category>
        <NavBtn>회원가입/로그인</NavBtn>
      </Navigation>

      <Container>
        <BigTitle>커뮤니티</BigTitle>
        <Contents>
          <Item>
            <Info>
              <Span>[개-요크셔]</Span>
              <Span>제목</Span>
            </Info>
            <Info>
              <Tags>
                <Tag>태그</Tag>
                <Tag>태그</Tag>
                <Tag>태그</Tag>
              </Tags>
              <Span>글쓴이:가나</Span>
            </Info>
          </Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </Contents>
      </Container>
    </Wrapper>
  );
}

export default Community;
