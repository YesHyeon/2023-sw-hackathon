import styled from '@emotion/styled';

export const Wrapper = styled.main``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 412px;
  height: 100vh;
  margin: 0px auto;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: space-around;
  gap: 10px;
`;
export const Btn = styled.div`
  height: 52px;
  width: 320px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 13px;
  opacity: 1;
  border: none;
  /* UI Properties */

  letter-spacing: -2.5px;
  color: #4e6aff;
  font: normal normal 800 25px/29px Nanum Gothic;

  cursor: pointer;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Span = styled.div`
  font: normal normal bold 16px/19px Nanum Gothic;
  letter-spacing: -1.6px;
  color: #ffffff;
  opacity: 1;
  font-size: 16px;
`;
export const Title = styled.div`
  text-align: center;
  font: normal normal 800 17px/25px Nanum Gothic;
  letter-spacing: -1.7px;
  color: #4a66f4;
  white-space: pre-line;
  opacity: 1;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  opacity: 1;
  width: 231px;
  height: 231px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 32px;
  opacity: 16px;

  gap: 10px;
`;

export const Spinner = styled.img`
  width: 66px;
  height: 66px;
`;

export const SubText = styled.div`
  text-align: center;
  font: normal normal bold 13px Nanum Gothic;
  letter-spacing: -1px;
  color: #7d7d7d;
  opacity: 1;
  white-space: pre-line;
`;
