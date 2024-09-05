import styled from "styled-components";

export const LocationWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  justify-content: center;
  margin: 80px 0;
  gap: 20px;
  flex-shrink: 0;
`;

export const Loc = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 395px;
    height: 300px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
  h3 {
    margin-top: 15px;
    color: var(--text, #373737);
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h2{
    margin: 5px 0;
    color: var(--blue, #006DAB);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    margin-top: 5px;
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
