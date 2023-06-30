import styled from '@emotion/styled';
import select from '../../img/select.png';
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
`;

export const Btn = styled.button`
  height: 30px;
  background: ${(props) =>
    props.disabled ? 'grey' : '#4E6AFF 0% 0% no-repeat padding-box;'};

  opacity: 1;
  border: none;
  /* UI Properties */
  text-align: center;
  letter-spacing: px;
  color: ${(props) => (props.disabled ? 'white' : '#FFFFFF')};
  border: none;

  fonst-size: 200px;
  cursor: pointer;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px 30px;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -2px;
  color: #6f7070;
  opacity: 1;
  gap: 10px;
`;
export const Detail = styled.div`
  text-align: center;
  letter-spacing: -2px;
  color: #6f7070;
  opacity: 1;
  font-size: 20px;
  white-space: pre-line;
`;
export const ResultBox = styled.div`
  height: 400px;
  overflow-y: scroll;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 0px;
  overflow-x: hidden;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 330px;
  height: 74px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 9px;
  opacity: 1;
  gap: 10px;

  cursor: pointer;

  :hover {
    border: 1px solid;
    border-color: #4e6aff;
  }
`;
export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 950%;
  gap: 10px;
`;

export const Span = styled.span`
  text-align: left;
  font: normal normal normal 5px Nanum Gothic;
  letter-spacing: -0.95px;
  color: #646464;
  opacity: 1;
`;

export const Label = styled.div`
  width: 38px;
  height: 14px;
  background: #4e6aff 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 50px;
  height: 15px;
  font: normal normal 800 12px/14px Nanum Gothic;
  letter-spacing: -1.14px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
`;
export const Name = styled.div`
  text-align: left;
  font: normal normal normal 15px/17px Nanum Gothic;
  letter-spacing: -1.43px;
  color: #000000;
  opacity: 1;
`;

export const GoogleMapWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

export const Img = styled.div`
  background-image: url(${select});
  position: absolute;
  width: 80px;
  height: 80px;
  background-size: cover;
  display: flex;
  margin-right: 300px;
  top: 140px;
`;

export const Medal = styled.div`
  display: flex;
  right: 0px;
  top: -3px;
  position: absolute;
  font-size: 35px;
`;

export const Input = styled.input`
  text-align: center;
  height: 41px;
  width: 150px;
  border: none;
  border-radius: 10px;
  font: normal normal normal 20px/27px Nanum Gothic;
  letter-spacing: -2px;
  color: #6f7070;
  opacity: 1;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StarImg = styled.img`
  position: relative;
  width: 10px;
  height: 10px;
  padding-right: -5px;
  left: 8px;
`;
