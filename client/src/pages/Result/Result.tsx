import { useCallback, useEffect, useState } from "react";
import { Input } from "../Search/Search.style";
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
  Img,
  Medal,
} from "./Result.style";
import { useLocation, useNavigate } from "react-router";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const onChange = (event: any) => setValue(event.target.value);
  const [value, setValue] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const data = [
    {
      hospital: "오름정형외과의원",
      distance: "13km",
      location: "충남 천안시 서북구 불당25로 176 율곡스퀘어 6층",
      lat: 36.816274,
      lng: 127.108932,
    },
    {
      hospital: "서울프라임병원",
      distance: "10km",
      location: "충남 천안시 서북구 불당25로 226 골든스퀘어Ⅱ2층~4층",
      lat: 36.82096,
      lng: 127.109911,
    },
    {
      hospital: "마디손정형외과병원",
      distance: "13km",
      location: "충남 천안시 서북구 불당34길 18",
      lat: 36.806313,
      lng: 127.106505,
    },
    {
      hospital: "연세나무병원",
      distance: "3km",
      location: "충남 천안시 서북구 불당21로 67-18 7~9층 연세나무병원",
      lat: 36.814151,
      lng: 127.108735,
    },
    {
      hospital: "쌍용메디컬의원",
      distance: "34km",
      location: "충남 천안시 서북구 월봉로 85 쌍용메디칼",
      lat: 36.798328,
      lng: 127.117961,
    },
  ];

  const getLocation = useCallback(() => {
    const getCurrentPosBtn = () => {
      navigator.geolocation.getCurrentPosition(
        getPosSuccess,
        () => alert("위치 정보를 가져오는데 실패했습니다."),
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
        }
      );
    };

    const getPosSuccess = (pos: GeolocationPosition) => {
      console.log(pos.coords.longitude);
      console.log(pos.coords.latitude);

      setCurrentLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    };

    getCurrentPosBtn();
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  const handleInitButtonClick = () => {
    navigate("/");
  };

  const pattern = /([^가-힣\x20])/i;

  const a = ["🥇", "🥈", "🥉", undefined, undefined];

  const postInfo = async () => {
    if (pattern.test(value)) {
      return alert("ㄴㄴ");
    }

    SetIsLoading(true);
    setTimeout(() => {
      SetIsLoading(false);

      navigate("/result", { state: value });
    }, 3000);
    const data = await axios
      .post(`http://localhost:3000/hospital`, {
        type: value,
        lat: currentLocation.lat,
        lng: currentLocation.lng,
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
    return data;
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
            <Img />
            <Input
              onChange={onChange}
              type="text"
              value={value}
              placeholder="입력"
            />
            <Btn type="submit" disabled={!value} onClick={() => postInfo()}>
              다시 찾기
            </Btn>
          </DetailBox>
          <ResultBox>
            <List>
              {data.map((item, index) => {
                return (
                  <Item>
                    <Medal>{a[index]}</Medal>
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
                          color: "#747474",
                          fontSize: 11,
                          marginLeft: 3,
                        }}>
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
            }}>
            처음으로 돌아가기
          </Btn>
        </Box>
        {isLoading ? <Loading /> : null}
      </Container>
    </Wraaper>
  );
}
export default Result;
