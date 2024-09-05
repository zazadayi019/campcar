import styled from "styled-components";
import map from "../../../../assets/map.svg";

export const InfoConWrap = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 130px;
`;
export const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1226px;
`;
export const InfoCarts = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 195px;
    height: 147px;
    flex-shrink: 0;
    border-radius: 10px;
  }
`;
export const InfoTitleCon = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 20px;
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const LocationWrap = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  b {
    color: var(--blue, #006dab);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    /* width: 120px; */
    height: 25px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--sariq, #ff7a00);
    color: var(--sariq, #ff7a00);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 2px 19px 3px 18px;
  }
`;

export const Line = styled.div`
  margin-top: 10.24px;
  width: 1226px;
  height: 1px;
  background: rgba(55, 55, 55, 0.2);
`;
export const Infomation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 393px;
  margin-top: 18px;
`;

export const InfomationLift = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InfoLoc = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const InfoPhone = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const InfomationRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InfoClock = styled.div`
  display: flex;
  gap: 10px;
  img {
    /* border: 1px solid red; */
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  span {
    color: var(--sariq, #ff7a00);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const InfoHome = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  p {
    color: var(--blue, #006dab);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  gap: 10px;
  b {
    color: var(--blue, #006dab);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    color: var(--text, #373737);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MapCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 20px;
  margin-top: 50px;
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 1226px;
  height: 552px;
  flex-shrink: 0;
`;

export const ZoomIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 5px 5px 0 0;
  background: #fff;
  border: 1px solid rgba(55, 55, 55, 0.3);
  b {
    color: rgba(55, 55, 55, 0.8);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 3.75px 14px 6.25px 15px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

export const ZoomOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 0 0 5px 5px;
  background: #fff;
  b {
    border: 1px solid rgba(55, 55, 55, 0.3);
    color: rgba(55, 55, 55, 0.8);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 3.75px 14px 6.25px 15px;
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
`;
