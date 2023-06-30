import styled from '@emotion/styled';
import searchbtn from '../../img/searchbtn.png';
export const Wraaper = styled.main``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  height: 100vh;
  margin: 0px auto;
  background-color: #f2f2f2;
  justify-content: center;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Title = styled.div`
  text-align: left;
  font: normal normal 800 28px/32px Nanum Gothic;
  letter-spacing: -2.8px;
  color: #ffffff;
  background: #4e6aff 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 111px;
  height: 34px;
  text-align: center;
`;
export const Contents = styled.div`
  width: 200px;
  height: 15px;
  text-align: left;
  font: normal normal normal 13px/17px Nanum Gothic;
  letter-spacing: -1.3px;
  color: #4e6aff;
  white-space: pre-line;
`;
export const Input = styled.input`
  text-align: center;
  height: 44px;
  border: none;
  border-radius: 10px;
  font: normal normal normal 20px/27px Nanum Gothic;
  letter-spacing: -2px;
  color: #6f7070;
  opacity: 1;
`;
export const Btn = styled.button`
  height: 52px;

  position: relative;
  background: ${(props) =>
    props.disabled ? '#B4B4B4' : '#4E6AFF 0% 0% no-repeat padding-box;'};
  border-radius: 13px;
  opacity: 1;
  border: none;
  /* UI Properties */
  text-align: center;
  letter-spacing: -2.5px;
  color: ${(props) => (props.disabled ? 'white' : 'white')};
  font: normal normal 800 25px/29px Nanum Gothic;
  cursor: pointer;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  gap: 30px;
`;

export const Img = styled.div`
  background-image: url(${searchbtn});
  background-size: cover;
  width: 50px;
  height: 40px;
  position: absolute;
  bottom: 5px;
  left: -5px;
`;
