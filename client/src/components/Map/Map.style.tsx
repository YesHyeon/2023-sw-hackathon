import styled from '@emotion/styled';
import exp from 'constants';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
`;

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 412px;
  height: 100vh;
  margin: 0px auto;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: space-around;
  gap: 10px;
  z-index: 100;
  position: fixed;
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
  height: 221px;

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

export const GoogleMapWrapper = styled.div`
  width: 310px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 210px;
  right: 50px;
  color: grey;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;
export const LocationWrapper = styled.div`
  display: flex;
  font-size: 12px;
`;

export const MainWrapper = styled.div``;
