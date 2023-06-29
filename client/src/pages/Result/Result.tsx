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
import { useMemo, useState, useCallback } from 'react';
import Map from '../../components/Map/Map';

function Result() {
  const { state } = useLocation();
  const [seeMap, setSeeMap] = useState([false, false, false, false, false]);
  const navigate = useNavigate();
  console.log(state);
  const center = useMemo(() => ({ lat: 12.345, lng: 678.91 }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDRQVy_3xtkSuN-0k7Xvi20BPCqWRP2fqk',
  });

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

  const handleInitButtonClick = () => {
    navigate('/');
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

  console.log('00', seeMap);

  return isLoaded ? (
    <Wraaper>
      <Container>
        <Box>
          <TitleBox>
            <Title>가치가요</Title>
          </TitleBox>
          <DetailBox>
            <Detail>{`${state.value}에 대한 검색 결과입니다`}</Detail>
            <Span>후기가 좋은 순서대로 위에서부터 나열되었습니다.</Span>
          </DetailBox>
          <ResultBox>
            <List>
              {data.map((itm, idx) => {
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
                      <ItemInfo>
                        <Label>영업중</Label>
                        <Name>{itm.hospital}</Name>
                        <Span>{itm.distance}</Span>
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
      </Container>
      <GoogleMapWrapper>
        <GoogleMap
          zoom={18}
          center={center}
          mapContainerClassName="map-container"
        >
          {/* <Marker
            position={center}
            icon={{ url: '/images/icons/map_marker.svg', scale: 5 }}
          /> */}
        </GoogleMap>
      </GoogleMapWrapper>
    </Wraaper>
  ) : null;
}
export default Result;
