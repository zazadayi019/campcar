import styled from "styled-components";
import tbg from "../../../../assets/tuning-bg.jpg";

export const MotorWrapper = styled.div``;

export const Wall = styled.div`
  background-image: url(${tbg});
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
  margin-top: 90px;
  h5 {
    font-size: 16px;
    font-weight: 500;
  }
  h3 {
    font-size: 27px;
    font-weight: 700;
  }
  h1 {
    font-size: 80px;
    font-weight: 700;
  }
`;
