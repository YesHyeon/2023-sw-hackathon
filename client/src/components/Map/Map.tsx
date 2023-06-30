import {
  Wrapper,
  Container,
  Btn,
  Box,
  Title,
  Span,
  BoxWrapper,
  SubText,
  Spinner,
  GoogleMapWrapper,
  CloseButton,
  TextWrapper,
  MainWrapper,
  LocationWrapper,
} from './Map.style';
import { useNavigate } from 'react-router-dom';
import spinner from '../../assets/spinner.gif';
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  MarkerF,
  Circle,
  InfoWindow,
} from '@react-google-maps/api';
import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { locationState } from '../../atoms/recoilAtomCurrentLocation';

function Map({
  setSeeMap,
  item,
  index,
}: {
  setSeeMap: any;
  item: any;
  index: number;
}) {
  const navigate = useNavigate();
  // const center =  ({ lat: item.lat, lng: item.lng }), []);
  const [location, setLocation] = useRecoilState(locationState);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDRQVy_3xtkSuN-0k7Xvi20BPCqWRP2fqk',
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };
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

  console.log('dsd', item);

  const onClickClose = () => {
    setSeeMap([false, false, false, false, false]);
  };

  return isLoaded ? (
    <Container>
      <Wrapper>
        <CloseButton onClick={() => onClickClose()}>X</CloseButton>
        <MainWrapper>
          <GoogleMapWrapper>
            <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={16}
              center={{ lat: item.lat, lng: item.lng }}
            >
              <MarkerF position={{ lat: item.lat, lng: item.lng }}></MarkerF>
            </GoogleMap>
          </GoogleMapWrapper>
          <TextWrapper>병원이름 : {item.hospital}</TextWrapper>
          <LocationWrapper>{item.location}</LocationWrapper>
        </MainWrapper>
      </Wrapper>
    </Container>
  ) : null;
}

export default Map;
