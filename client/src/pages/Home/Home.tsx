import { Wrapper } from "../Community/Community.style";
import { Container, Btn, Box, Title, Span, Circle, Img } from "./Home.style";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate("/keyword");
  };
  return (
    <Wrapper>
      <Container>
        <Box>
          <Span>혼자 아무 병원이나 가지 말고</Span>
          <Title>병원 맛집</Title>
        </Box>
        <Circle />
        <Img />
        <Btn onClick={() => handleNextButtonClick()}>시작하기</Btn>
      </Container>
    </Wrapper>
  );
}

export default Home;
