import React, { useState } from 'react';
import logo from './logo.svg';
import LoginComponents from '../../components/LoginComponents';
import {
  MainContainer,
  Header,
  SubHeader,
  LoginBox,
  LoginBoxWrapper,
  LoginBoxText,
  Emoji,
  KakaoLogin,
  KakaoImg,
  KakaoText,
} from './Login.style';
import kakao from '../../assets/kakao.svg';

function Login() {
  const [isClicked, setisClicked] = useState([false, false]);

  const handleButtonClicked = (num: Number) => {
    if (num == 1) {
      setisClicked([true, false]);
    } else {
      setisClicked([false, true]);
    }
  };

  const { Kakao } = window;

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login/oauth',
      scope: 'profile_nickname,account_email,gender,profile_image',
    });
  };

  return (
    <MainContainer>
      <Header>로그인</Header>
      <SubHeader>나는,</SubHeader>
      <LoginBoxWrapper>
        <LoginBox onClick={() => handleButtonClicked(1)} active={isClicked[0]}>
          <Emoji>🙋‍♂️</Emoji>
          <LoginBoxText>일반회원입니다</LoginBoxText>
        </LoginBox>
        <LoginBox onClick={() => handleButtonClicked(2)} active={isClicked[1]}>
          <Emoji>👨‍⚕️</Emoji>
          <LoginBoxText>수의사입니다</LoginBoxText>
        </LoginBox>
      </LoginBoxWrapper>
      <KakaoLogin active={isClicked} onClick={loginWithKakao}>
        <KakaoImg src={kakao}></KakaoImg>
        <KakaoText>카카오 로그인</KakaoText>
      </KakaoLogin>
      <LoginComponents />
    </MainContainer>
  );
}

export default Login;
