import {
  Box,
  Container,
  TitleBox,
  Wraaper,
  Title,
  Contents,
  DetailBox,
  Detail,
  KeywordBox,
  KeywordBtn,
  Btn,
} from "./Keyword.style";

function Keyword() {
  const keyword = [
    "내과",
    "비뇨기과",
    "산부인과",
    "신경과",
    "신경외과",
    "심장내과",
    "안과",
    "외과",
    "이비인후과",
    "정신과",
    "정형외과",
    "치과",
    "피부과",
    "항문외과",
  ];

  return (
    <Wraaper>
      <Container>
        <Box>
          <TitleBox>
            <Title>가치가요</Title>
            <Contents>
              병 이름을 입력하시면 우리 집 근처, 가장 알맞은 병원을
              추천해드려요!
            </Contents>
          </TitleBox>
          <DetailBox>
            <Detail>진료과목을 선택해주세요.</Detail>
          </DetailBox>
          <KeywordBox>
            {keyword.map((keyword, idx) => {
              return (
                <>
                  <KeywordBtn value={idx}>{keyword}</KeywordBtn>
                </>
              );
            })}
          </KeywordBox>
          <Btn>다음 단계로</Btn>
        </Box>
      </Container>
    </Wraaper>
  );
}

export default Keyword;
