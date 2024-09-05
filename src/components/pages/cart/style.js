import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
`;

export const LineWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  b {
    color: var(--text, #373737);
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    width: 100px;
    height: 3px;
    background: #ff7a00;
  }
`;
export const MainCon = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 45px;
`;
export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 811px;
  height: 476px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  /* position: fixed; */
  img {
    display: flex;
    padding: 0 64px 0 64px;
    width: 683px;
    height: 406px;
    flex-shrink: 0;
    border-radius: 10px;
    /* background: url(<path-to-image>) lightgray 50% / cover no-repeat; */
  }
`;
export const Purchase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 350px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(55, 55, 55, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  p {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  b {
    color: #373737;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 321px;
  /* border: 1px solid red; */
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 45px;
    margin-top: 58px;
    width: 321px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--blue, #006dab);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
  }
`;
export const CarName = styled.div`
  b {
    display: flex;
    margin-top: 17px;
    color: var(--text, #373737);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h3 {
    display: flex;
    margin-top: 12px;
    color: var(--blue, #006dab);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h5 {
    display: flex;
    margin-top: 20px;
    color: #373737;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    display: flex;
    margin: 12px 0 165px 0;
    color: rgba(55, 55, 55, 0.7);
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -8px;
  b {
    display: flex;
    margin-top: 50px;
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  label {
    display: flex;
    margin: 30px 0 10px 10px;
    color: rgba(55, 55, 55, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  input {
    width: 321px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    color: rgba(55, 55, 55, 0.6);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    padding: 0 20px 0 20px;
  }
`;
