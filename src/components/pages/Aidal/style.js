import styled from "styled-components";
import bg from "../../../assets/Aidal-bg.svg";

export const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WallWrap = styled.div`
  margin-top: 90px;
  width: 100%;
  height: 704px;
  flex-shrink: 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const WallBtn = styled.div`
  display: flex;
  /* border: 1px solid red; */
  gap: 12.1px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 31.14px;
    width: 181.5px;
    height: 50.014px;
    flex-shrink: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PriceCon = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 70px;
`;

export const PriceLift = styled.div`
  img {
    width: 626px;
    height: 381px;
    flex-shrink: 0;
  }
`;

export const PriceRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 360px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  padding: 30px 20px;

  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 35px 0 5px;
  b {
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #006dab;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    display: flex;
    margin-left: 5px;
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    width: 560px;
    height: 1px;
    background: rgba(55, 55, 55, 0.3);
  }
`;
export const Titel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const TitelLift = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 5px;
  gap: 10px;
`;

export const TitelRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const InfoCon = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 683px;
    flex-shrink: 0;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 80px 153px 70px;
  gap: 20px;
  b {
    margin-top: 70px;
    color: var(--text, #373737);
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    display: flex;
    width: 533px;
    flex-shrink: 0;
    color: #373737;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 50px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 181px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const NavConWrapp = styled.div`
  display: flex;
  width: 1366px;
  height: 60px;
  flex-shrink: 0;
  background: rgba(0, 109, 171, 0.2);
`;
export const AidalNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  b {
    display: flex;
    padding: 19px 24px 19px 27px;
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  b:hover {
    display: flex;
    cursor: pointer;
    background: var(--blue, #006dab);
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ReviewWrap = styled.div`
  display: flex;
  width: 1366px;
  justify-content: space-between;
  /* border: 1px solid red; */
  margin-top: 40px;
`;
export const TitelWrap = styled.div`
  display: flex;
  align-items: center;
  b {
    color: var(--text, #373737);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  span {
    margin-left: 10px;
    color: var(--blue, #006dab);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  input {
    display: flex;
    padding-left: 10px;
    width: 177px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    background: #fff;
  }
  img {
    width: 43px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
    background: #fff;
    padding: 10px 13px 9px 14px;
    margin-left: -43px;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
  }
`;
export const BottomItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 43px 0 0;
`;

export const AidalBottomCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
`;
export const ItemCon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgCon = styled.div`
  display: flex;
  gap: 15px;
  img {
    width: 97.5px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 10px;
    /* background: lightgray 50% / cover no-repeat; */
  }
`;

export const TlLift = styled.div`
  display: flex;
  flex-direction: column;
  b {
    color: var(--text, #373737);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h4 {
    margin-top: 2.5px;
    color: rgba(55, 55, 55, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    margin-top: 16.5px;
    color: rgba(55, 55, 55, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const TlRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  p {
    color: rgba(55, 55, 55, 0.7);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  span {
    margin-left: 10px;
    color: #373737;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ItemLine = styled.div`
  div {
    margin: 30px 0 20.33px 0;
    width: 1432px;
    height: 1px;
    background: rgba(55, 55, 55, 0.15);
  }
`;





export const AidalRouterWrappar = styled.div`

`;