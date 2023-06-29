import {
  Btn,
  Box,
  Container,
  TitleBox,
  Wraaper,
  Title,
  Contents,
  DetailBox,
  ResultBox,
  List,
  Item,
  Detail,
  Span,
  ItemInfo,
  Label,
  Name,
} from './Result.style';
import { useLocation, useNavigate } from 'react-router';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const data = [
    {
      hospital: '오름정형외과의원',
      distance: '13km',
      location: '충남 천안시 서북구 불당25로 176 율곡스퀘어 6층',
    },
    {
      hospital: '서울프라임병원',
      distance: '10km',
      location: '충남 천안시 서북구 불당25로 226 골든스퀘어Ⅱ2층~4층',
    },
    {
      hospital: '마디손정형외과병원',
      distance: '13km',
      location: '충남 천안시 서북구 불당34길 18',
    },
    {
      hospital: '연세나무병원',
      distance: '3km',
      location: '충남 천안시 서북구 불당21로 67-18 7~9층 연세나무병원',
    },
    {
      hospital: '쌍용메디컬의원',
      distance: '34km',
      location: '충남 천안시 서북구 월봉로 85 쌍용메디칼',
    },
  ];

  const handleInitButtonClick = () => {
    navigate('/');
  };

  return (
    <Wraaper>
      <Container>
        <Box>
          <TitleBox>
            <Title>가치가요</Title>
          </TitleBox>
          <DetailBox>
            <Detail>{`${state}에 대한 검색 결과입니다`}</Detail>
            <Span>후기가 좋은 순서대로 위에서부터 나열되었습니다.</Span>
          </DetailBox>
          <ResultBox>
            <List>
              {data.map((item) => {
                return (
                  <Item>
                    <ItemInfo>
                      <Label>영업중</Label>
                      <Name>{item.hospital}</Name>
                      <Span>{item.distance}</Span>
                    </ItemInfo>
                    <ItemInfo>
                      <span style={{ fontSize: 11, marginLeft: 5 }}>
                        상세 주소
                      </span>
                      <span
                        style={{
                          color: '#747474',
                          fontSize: 11,
                          marginLeft: 3,
                        }}
                      >
                        {item.location}
                      </span>
                    </ItemInfo>
                  </Item>
                );
              })}
            </List>
          </ResultBox>
          <Btn
            onClick={() => {
              handleInitButtonClick();
            }}
          >
            처음으로 돌아가기
          </Btn>
        </Box>
      </Container>
    </Wraaper>
  );
}
export default Result;
