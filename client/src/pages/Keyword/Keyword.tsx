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
  Img,
} from "./Keyword.style";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Keyword() {
  const [keywordValue, setKeywordValue] = useState("");
  const [canGoNext, SetCanGoNext] = useState(false);
  const [isSelected, SetIsSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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

  useEffect(() => {
    isSelected.map((item, index) => {
      if (item == true) {
        setKeywordValue(keyword[index]);
        SetCanGoNext(true);
      }
    });
  }, [isSelected]);

  console.log(keywordValue);

  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate("/search", { state: { isSelected } });
  };

  const handleKeywordClick = (idx: number) => {
    const data = isSelected.map((item, index) => {
      if (index === idx) {
        return true;
      } else {
        return false;
      }
    });
    SetIsSelected(data);
  };

  console.log(isSelected);

  return (
    <Wraaper>
      <Container>
        <Box>
          <TitleBox>
            <Title>가치가요</Title>
            <Contents>
              {`병 이름을 입력하시면 우리 집 근처 \n 가장 알맞은 병원을 추천해드려요!`}
            </Contents>
          </TitleBox>
          <DetailBox>
            <Img />
            <Detail>진료과목을 선택해주세요.</Detail>
          </DetailBox>
          <KeywordBox>
            {keyword.map((keyword, idx) => {
              return (
                <KeywordBtn
                  value={idx}
                  onClick={() => handleKeywordClick(idx)}
                  selected={isSelected[idx]}>
                  {keyword}
                </KeywordBtn>
              );
            })}
          </KeywordBox>
          <Btn onClick={() => handleNextButtonClick()} selected={canGoNext}>
            다음 단계로
          </Btn>
        </Box>
      </Container>
    </Wraaper>
  );
}

export default Keyword;
