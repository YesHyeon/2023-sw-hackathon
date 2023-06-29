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

function Result() {
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
            <Detail>"백내장"에 대한 검색 결과입니다</Detail>
            <Span>후기가 좋은 순서대로 위에서부터 나열되었습니다.</Span>
          </DetailBox>
          <ResultBox>
            <List>
              <Item>
                <ItemInfo>
                  <Label>영업중</Label>
                  <Name>땡땡 안과</Name>
                  <Span>400m</Span>
                </ItemInfo>
                <ItemInfo>
                  <span style={{ fontSize: 11 }}>상세 주소</span>
                  <span
                    style={{
                      color: '#747474',
                      fontSize: 11,
                      marginLeft: 10,
                    }}
                  >
                    서울시 XX구 XX동 XX로 XXXX건물 XXX호
                  </span>
                </ItemInfo>
              </Item>
              <Item>
                <ItemInfo>
                  <Label>영업중</Label>
                  <Name>땡땡 안과</Name>
                  <Span>400m</Span>
                </ItemInfo>
                <ItemInfo>
                  <span style={{ fontSize: 11 }}>상세 주소</span>
                  <span
                    style={{
                      color: '#747474',
                      fontSize: 11,
                    }}
                  >
                    서울시 XX구 XX동 XX로 XXXX건물 XXX호
                  </span>
                </ItemInfo>
              </Item>
              <Item>
                <ItemInfo>
                  <Label>영업중</Label>
                  <Name>땡땡 안과</Name>
                  <Span>400m</Span>
                </ItemInfo>
                <ItemInfo>
                  <span style={{ fontSize: 11 }}>상세 주소</span>
                  <span
                    style={{
                      color: '#747474',
                      fontSize: 11,
                    }}
                  >
                    서울시 XX구 XX동 XX로 XXXX건물 XXX호
                  </span>
                </ItemInfo>
              </Item>
              <Item>
                <ItemInfo>
                  <Label>영업중</Label>
                  <Name>땡땡 안과</Name>
                  <Span>400m</Span>
                </ItemInfo>
                <ItemInfo>
                  <span style={{ fontSize: 11 }}>상세 주소</span>
                  <span
                    style={{
                      color: '#747474',
                      fontSize: 11,
                    }}
                  >
                    서울시 XX구 XX동 XX로 XXXX건물 XXX호
                  </span>
                </ItemInfo>
              </Item>
              <Item>
                <ItemInfo>
                  <Label>영업중</Label>
                  <Name>땡땡 안과</Name>
                  <Span>400m</Span>
                </ItemInfo>
                <ItemInfo>
                  <span style={{ fontSize: 11 }}>상세 주소</span>
                  <span
                    style={{
                      color: '#747474',
                      fontSize: 11,
                    }}
                  >
                    서울시 XX구 XX동 XX로 XXXX건물 XXX호
                  </span>
                </ItemInfo>
              </Item>
              <Item>
                <ItemInfo>
                  <Label>영업중</Label>
                  <Name>땡땡 안과</Name>
                  <Span>400m</Span>
                </ItemInfo>
                <ItemInfo>
                  <span style={{ fontSize: 11 }}>상세 주소</span>
                  <span
                    style={{
                      color: '#747474',
                      fontSize: 11,
                    }}
                  >
                    서울시 XX구 XX동 XX로 XXXX건물 XXX호
                  </span>
                </ItemInfo>
              </Item>
            </List>
          </ResultBox>
          <Btn>처음으로 돌아가기</Btn>
        </Box>
      </Container>
    </Wraaper>
  );
}
export default Result;
