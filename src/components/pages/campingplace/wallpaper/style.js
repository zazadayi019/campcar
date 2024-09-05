import styled from "styled-components";
import bg from "../../../../assets/camping-places-bg.jpeg";

export const Wall = styled.div`
  margin-top: 90px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  color: #fff;
  font-style: normal;
  line-height: normal;
  h5 {
    font-size: 16px;
    font-weight: 500;
  }
  h1 {
    font-size: 80px;
    font-weight: 700;
  }
`;
