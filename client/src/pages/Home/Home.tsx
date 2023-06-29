import {
  Wrapper,
  Navigation,
  Logo,
  Input,
  Search,
  Category,
  NavBtn,
  Container,
  Box,
  Title,
  Contents,
  ItemBox,
  Item,
} from './Home.style';

function Home() {
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
        <Box>
          <Title>fff</Title>
          <Contents>
            <ItemBox>
              커뮤니티
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
            </ItemBox>
            <ItemBox>
              열심 수의사
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
            </ItemBox>
          </Contents>
        </Box>
        <Box>
          <Title>fff</Title>
          <Contents>
            <ItemBox>
              커뮤니티
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
            </ItemBox>
            <ItemBox>
              열심 수의사
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
              <Item>fd</Item>
            </ItemBox>
          </Contents>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Home;
