import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const RegistrateWrap = styled.div`
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
  padding: 25px 30px 40px 30px;
`;
export const Registrate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* border: 1px solid red; */
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
export const XWrap = styled.div`
  display: flex;
  justify-content: space-between;
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
