import styled from "@emotion/styled";

export const Wraaper = styled.main``;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
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
    height: 52px;
    background: ${(props) =>
        props.disabled ? "grey" : "#4E6AFF 0% 0% no-repeat padding-box;"};
    border-radius: 13px;
    opacity: 1;
    border: none;
    /* UI Properties */
    text-align: center;
    letter-spacing: -2.5px;
    color: ${(props) => (props.disabled ? "#707070" : "#FFFFFF")};
    font: normal normal 800 25px/29px Nanum Gothic;
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
export const ResultBox = styled.div`
    height: 400px;
    overflow-y: scroll;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 0px;
`;
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    width: 313px;
    height: 74px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 9px;
    opacity: 1;
    margin-right: 10px;
`;
export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 10px;
`;

export const Span = styled.span`
    text-align: left;
    font: normal normal normal 10px/38px Nanum Gothic;
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
