import { Wrapper } from "../Community/Community.style";
import { Container, Btn, Box, Title, Span } from "./Home.style";

function Home() {
    return (
        <Wrapper>
            <Container>
                <Box>
                  <Span>혼자 아무 병원이나 가지 말고</Span>
                  <Title>가치가요</Title>
                </Box>
                <Btn>시작하기</Btn>
            </Container>
        </Wrapper>
    );
}

export default Home;
