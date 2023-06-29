import styled from '@emotion/styled';

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

export const Btn = styled.button<{ selected: boolean }>`
  height: 52px;
  background-color: ${(props) => (props.selected ? '#4E6AFF' : '#707070')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  margin-top: 30px;
  border-radius: 13px;
  opacity: 1;
  border: none;
  /* UI Properties */
  text-align: center;
  letter-spacing: -2.5px;
  color: ${(props) => (props.disabled ? '#707070' : '#FFFFFF')};
  letter-spacing: -2.5px;
  color: ${(props) => (props.disabled ? '#707070' : '#FFFFFF')};
  font: normal normal 800 25px/29px Nanum Gothic;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 30px;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  letter-spacing: -2px;
  color: #6f7070;
  opacity: 1;
`;
export const Detail = styled.div`
  text-align: center;
  letter-spacing: -2px;
  color: #6f7070;
  opacity: 1;
  font-size: 20px;
`;

export const KeywordBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;
export const KeywordBtn = styled.button<{ selected: boolean }>`
  background: ${(props) =>
    props.selected ? '#4E6AFF 0% 0% no-repeat padding-box;' : 'white'};
  color: ${(props) => (props.selected ? 'white ' : 'black')};
  border-radius: 9px;
  opacity: 1;
  width: 100px;
  height: 50px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
