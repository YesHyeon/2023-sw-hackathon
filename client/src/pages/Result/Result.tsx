import { useCallback, useEffect, useState } from 'react';

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
  GoogleMapWrapper,
  Img,
  Medal,
  Input,
  InputWrapper,
  StarImg,
} from './Result.style';
import { useLocation, useNavigate } from 'react-router';
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
  Circle,
  InfoWindow,
} from '@react-google-maps/api';

import star from '../../assets/star.png';

import Map from '../../components/Map/Map';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';

function Result() {
  const { state } = useLocation();
  const [seeMap, setSeeMap] = useState([false, false, false, false, false]);
  const [disease, setDease] = useState(state.value);
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDRQVy_3xtkSuN-0k7Xvi20BPCqWRP2fqk',
  });

  const onChange = (event: any) => setValue(event.target.value);
  const [value, setValue] = useState('');
  const [isLoading, SetIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [hospitalData, setHospitalData] = useState([
    {
      hospital: '오름정형외과의원',
      distance: '13km',
      location: '충남 천안시 서북구 불당25로 176 율곡스퀘어 6층',
      lat: 36.816274,
      lng: 127.108932,
      grade: 8,
    },
    {
      hospital: '서울프라임병원',
      distance: '10km',
      location: '충남 천안시 서북구 불당25로 226 골든스퀘어Ⅱ2층~4층',
      lat: 36.82096,
      lng: 127.109911,
      grade: 7,
    },
    {
      hospital: '마디손정형외과병원',
      distance: '13km',
      location: '충남 천안시 서북구 불당34길 18',
      lat: 36.806313,
      lng: 127.106505,
      grade: 7,
    },
    {
      hospital: '연세나무병원',
      distance: '3km',
      location: '충남 천안시 서북구 불당21로 67-18 7~9층 연세나무병원',
      lat: 36.814151,
      lng: 127.108735,
      grade: 4,
    },
    {
      hospital: '쌍용메디컬의원',
      distance: '34km',
      location: '충남 천안시 서북구 월봉로 85 쌍용메디칼',
      lat: 36.798328,
      lng: 127.117961,
      grade: 3,
    },
  ]);
  const data = [
    {
      hospital: '오름정형외과의원',
      distance: '13km',
      location: '충남 천안시 서북구 불당25로 176 율곡스퀘어 6층',
      lat: 36.816274,
      lng: 127.108932,
    },
    {
      hospital: '서울프라임병원',
      distance: '10km',
      location: '충남 천안시 서북구 불당25로 226 골든스퀘어Ⅱ2층~4층',
      lat: 36.82096,
      lng: 127.109911,
    },
    {
      hospital: '마디손정형외과병원',
      distance: '13km',
      location: '충남 천안시 서북구 불당34길 18',
      lat: 36.806313,
      lng: 127.106505,
    },
    {
      hospital: '연세나무병원',
      distance: '3km',
      location: '충남 천안시 서북구 불당21로 67-18 7~9층 연세나무병원',
      lat: 36.814151,
      lng: 127.108735,
    },
    {
      hospital: '쌍용메디컬의원',
      distance: '34km',
      location: '충남 천안시 서북구 월봉로 85 쌍용메디칼',
      lat: 36.798328,
      lng: 127.117961,
    },
  ];

  const getLocation = useCallback(() => {
    const getCurrentPosBtn = () => {
      navigator.geolocation.getCurrentPosition(
        getPosSuccess,
        () => alert('위치 정보를 가져오는데 실패했습니다.'),
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
    navigate('/');
  };

  const pattern = /([^가-힣\x20])/i;

  const a = ['🥇', '🥈', '🥉', undefined, undefined];

  const postInfo = async () => {
    if (pattern.test(value)) {
      return alert('입력이 올바르지 않습니다.');
    }

    SetIsLoading(true);

    setTimeout(() => {
      SetIsLoading(false);
      setDease(value);
      setHospitalData(data2);
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

  const handleItemClick = useCallback(
    (idx: number) => {
      const data = seeMap.map((item, index) => {
        if (index == idx) {
          return true;
        } else {
          return false;
        }
      });

      setSeeMap(data);
    },
    [seeMap]
  );

  const data2 = [
    {
      hospital: '천안김안과신불당의원안과',
      distance: '23km',
      location: '충남 천안시 서북구 불당33길 22 불당고은타워 4층',
      lat: 36.81185,
      lng: 127.108103,
      grade: 7,
    },
    {
      hospital: '천안김안과 천안역본점의원',
      distance: '18km',
      location: '충남 천안시 동남구 중앙로 92',
      lat: 36.806573,
      lng: 127.152625,
      grade: 6,
    },
    {
      hospital: '천안서울안과 ',
      distance: '32km',
      location: '충남 천안시 동남구 만남로 30 로얄빌딩 7층',
      lat: 36.818627,
      lng: 127.15538,
      grade: 4,
    },
    {
      hospital: '조은성모안과의원안과',
      distance: '12km',
      location: '충남 천안시 서북구 직산읍 삼은3길 45 3층',
      lat: 36.879834,
      lng: 127.153601,
      grade: 3,
    },
    {
      hospital: '삼성미라클안과의원',
      distance: '17km',
      location: '충남 천안시 서북구 충무로 125 2층',
      lat: 36.797906,
      lng: 127.154971,
      grade: 3,
    },
  ];

  console.log('00', seeMap);

  return isLoaded ? (
    <Wraaper>
      <Container>
        <Box>
          <TitleBox>
            <Title>병원맛집</Title>
          </TitleBox>
          <DetailBox>
            <Detail>{`현재 위치와 가까우면서 "${disease}" 치료의 \n 후기가 가장 좋은 병원입니다`}</Detail>
            <Img />
            <InputWrapper>
              <Input
                onChange={onChange}
                type="text"
                value={value}
                placeholder="입력"
              />
              <Btn type="submit" disabled={!value} onClick={() => postInfo()}>
                다시 찾기
              </Btn>
            </InputWrapper>
          </DetailBox>
          <ResultBox>
            <List>
              {hospitalData.map((itm, idx) => {
                return (
                  <>
                    {seeMap[idx] ? (
                      <Map setSeeMap={setSeeMap} item={itm} index={idx}></Map>
                    ) : null}
                    <Item
                      onClick={() => {
                        handleItemClick(idx);
                      }}
                    >
                      <Medal>{a[idx]}</Medal>
                      <ItemInfo>
                        <Label>영업중</Label>
                        <Name>{itm.hospital}</Name>
                        <Span>{itm.distance}</Span>
                        <StarImg src={star} />
                        <Span>{itm.grade}점</Span>
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
                          {itm.location}
                        </span>
                      </ItemInfo>
                    </Item>
                  </>
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
        {isLoading ? <Loading /> : null}
      </Container>
    </Wraaper>
  ) : null;
}
export default Result;
