import {

    Box,
    Container,
    TitleBox,
    Wraaper,
    Title,
    Contents,
    DetailBox,
    Detail,
} from "./Keyword.style";

function Keyword() {
    return (
        <Wraaper>
            <Container>
                <Box>
                    <TitleBox>
                        <Title>가치가요</Title>
                        <Contents>
                            병 이름을 입력하시면 우리 집 근처, 가장 알맞은
                            병원을 추천해드려요!
                        </Contents>
                    </TitleBox>
                    <DetailBox>
                        <Detail>진료과목을 선택해주세요.</Detail>
                    </DetailBox>
                </Box>
            </Container>
        </Wraaper>
    );
}

export default Keyword;
