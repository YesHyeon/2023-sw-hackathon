import React from 'react';
import logo from './logo.svg';

function LoginComponents() {
  const { Kakao } = window;

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/login/oauth',
      scope: 'profile_nickname,account_email,gender,profile_image',
    });
  };

  return (
    <div className="App" onClick={loginWithKakao}>
      로그인
    </div>
  );
}

export default LoginComponents;
