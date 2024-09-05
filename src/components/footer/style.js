import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
  /* border: 1px solid red; */
  width: 100%;
  height: 350px;
  flex-shrink: 0;
  background: var(--blue, #006dab);
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 1366px;
  .logo {
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .services-wrapper h3 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 40px;
  }
  .services-wrapper p {
    display: flex;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 9px;
  }
  .contact-wrapper h3 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 40px;
  }
  .contact-wrapper p {
    display: flex;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 7px;
  }
  .sns-wrapper {
    display: flex;
    gap: 12px;
    margin-bottom: 10.57px;
  }
`;
