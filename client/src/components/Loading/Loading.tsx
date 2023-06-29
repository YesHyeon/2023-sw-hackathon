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
} from './Loading.style';
import { useNavigate } from 'react-router-dom';
import spinner from '../../assets/spinner.gif';

function Loading() {
  const navigate = useNavigate();

  return (
    <Container>
      <BoxWrapper>
        <Title>{`로딩중입니다 \n 잠시만 기다려 주세요`}</Title>
        <SubText>{`고객님 근처에 위치한\n후기가 좋은 병원을 찾고 있습니다...`}</SubText>
        <Spinner src={spinner}></Spinner>
      </BoxWrapper>
    </Container>
  );
}

export default Loading;
