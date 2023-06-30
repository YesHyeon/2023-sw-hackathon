import { useState, useCallback, useEffect } from 'react';

import {
  Btn,
  Box,
  Container,
  Input,
  TitleBox,
  Wraaper,
  Title,
  Contents,
  Img,
} from './Search.style';
import axios from 'axios';
import useGeolocation from 'react-hook-geolocation';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { locationState } from '../../atoms/recoilAtomCurrentLocation';

const Search = () => {
  const geolocation = useGeolocation();
  const [value, setValue] = useState('');
  const onChange = (event: any) => setValue(event.target.value);
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [isLoading, SetIsLoading] = useState(false);
  const [location, setLocation] = useRecoilState(locationState);

  const navigate = useNavigate();

  const getLocation = useCallback(async () => {
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

      setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    };

    getCurrentPosBtn();
  }, [location, currentLocation]);

  useEffect(() => {
    getLocation();
  }, []);

  const pattern = /([^가-힣\x20])/i;

  const postInfo = async () => {
    if (pattern.test(value)) {
      return alert('오타가 감지되었습니다. ');
    }

    SetIsLoading(true);
    setTimeout(() => {
      SetIsLoading(false);
      const data = {
        value: value,
        currentLocation: currentLocation,
      };

      navigate('/result', { state: data });
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
            <Contents>
              {`병 이름을 입력하시면 우리 집 근처\n가장 알맞은 병원을 추천해드려요!`}
            </Contents>
          </TitleBox>
          <Input
            onChange={onChange}
            type="text"
            value={value}
            placeholder="입력"
          />
          <Btn type="submit" disabled={!value} onClick={() => postInfo()}>
            병원찾기
            <Img />
          </Btn>
        </Box>
        {isLoading ? <Loading /> : null}
      </Container>
    </Wraaper>
  );
};
export default Search;
