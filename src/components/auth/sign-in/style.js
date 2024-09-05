import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const SignInnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* justify-content: center; */
  /* align-items: center; */
  /* border: 1px solid red;     */

  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 33px 33px 49px 33px;
`;
export const SignInn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  b {
    display: flex;
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    width: 434px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--blue, #006dab);
    border: none;
    color: #fff;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const LabelInputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    display: flex;
    color: rgba(55, 55, 55, 0.8);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-left: 10px;
    margin-top: 19px;
  }
  input {
    width: 434px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    border: none;
    padding: 15px 20px;
    color: rgba(55, 55, 55, 0.6);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const KeepForget = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #373737;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Checkboxx = styled.div`
  display: flex;
  gap: 5px;
  /* border: 1px solid red; */
  input {
    display: flex;
    width: 23px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    background: red;
  }
`;

export const OrCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  button {
    width: 434px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid var(--blue, #006dab);
    background: none;
    color: var(--blue, #006dab);
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const OrLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    width: 119.017px;
    height: 1px;
    background: rgba(55, 55, 55, 0.15);
  }
  p {
    color: #6d6d6d;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
export const SnsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11.5px;
`;
export const Naverr = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background: #039600;
  border-radius: 50%;
  padding: 13.8px 12.65px;
  img {
    width: 20.7px;
    height: 18.4px;
    flex-shrink: 0;
  }
`;
export const Google = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background: #bc0000;
  border-radius: 50%;
  padding: 9.2px;
  img {
    width: 27.6px;
    height: 27.6px;
    flex-shrink: 0;
  }
`;
export const Kakao = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  background: #ffc700;
  border-radius: 50%;
  padding: 6.9px;
  img {
    width: 32.2px;
    height: 32.2px;
    flex-shrink: 0;
  }
`;
