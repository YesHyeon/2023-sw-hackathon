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
} from './Map.style';
import { useNavigate } from 'react-router-dom';
import spinner from '../../assets/spinner.gif';
import {
  GoogleMap,
  useJsApiLoader,
  Polygon,
  Marker,
  Circle,
  InfoWindow,
} from '@react-google-maps/api';
import { useMemo } from 'react';

function Map() {
  const navigate = useNavigate();
  const center = useMemo(() => ({ lat: 36.75047, lng: 127.286844 }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDRQVy_3xtkSuN-0k7Xvi20BPCqWRP2fqk',
  });

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  return isLoaded ? (
    <Container>
      <GoogleMapWrapper>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={10}
          center={center}
        ></GoogleMap>
      </GoogleMapWrapper>
    </Container>
  ) : null;
}

export default Map;
