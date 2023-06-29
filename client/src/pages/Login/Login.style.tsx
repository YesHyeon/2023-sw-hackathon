import styled from '@emotion/styled';

export const MainContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  font-size: 25px;
  color: white;
  background-color: white;
`;

export const Header = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  top: 100px;

  left: 0px;
  right: 0px;
  margin: 0 auto;
  color: black;

  font: normal normal normal 70px/38px Nanum Gothic;
`;

export const SubHeader = styled.div`
  position: relative;
  width: 100px;
  top: 120px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  font-size: 50px;
  color: black;
  font-weight: bold;
`;

export const LoginBox = styled.div<{ active: boolean }>`
  /* Layout Properties */
  top: 100px;
  left: 1048px;
  width: 412px;
  height: 405px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 53px;
  opacity: 1;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  align-items: center;
  cursor: pointer;
  background-color: ${(props: any) => (props.active ? '#3EB575' : 'white')};
  color: ${(props: any) => (props.active ? 'white' : 'black')};
`;

export const LoginBoxWrapper = styled.div`
  position: relative;
  top: 101px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;

  width: 1000px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

export const LoginBoxText = styled.div`
  font-size: 40px;
`;

export const Emoji = styled.div`
  font-size: 100px;
`;

export const KakaoLogin = styled.div<{ active: Boolean[] }>`
  position: relative;
  width: 455px;
  height: 76px;
  top: 130px;
  left: 0px;
  right: 0px;
  margin: 0 auto;

  /*UIProperties*/
  background-color: ${(props: any) =>
    props.active[0] || props.active[1] ? '#fef01b' : 'white'};
  border-radius: 15px;
  border: ${(props: any) =>
    props.active[0] || props.active[1] ? '#fef01b' : '1px black solid'};
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  cursor: pointer;
`;

export const KakaoImg = styled.img`
  width: 30px;
`;

export const KakaoText = styled.div`
  padding-left: 30px;
`;
