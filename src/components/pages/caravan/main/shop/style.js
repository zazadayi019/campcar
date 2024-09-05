import styled from "styled-components";

export const GridCarWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  margin-top: 37px;
  gap: 21px;
`;
export const GridContainer = styled.div`
  display: flex;
  /* padding: 15px 10px 20px 10px; */
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  .car-i-wrapper {
    display: flex;
    width: 202.42px;
    height: 137.433px;
    flex-shrink: 0;
    border-radius: 20px;
  }
  .name-of-the-car {
    padding: 5px;
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .brandname {
    display: flex;
    justify-content: space-between;
    padding: 0 5px 0 5px;
    color: var(--text, #373737);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .star-wrapper {
    display: flex;
  }
  h2 {
    margin-top: 18px;
    color: var(--blue, #006dab);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .shop-btn {
    display: flex;
    gap: 15px;
    button {
      margin-top: 13px;
      width: 94px;
      height: 35px;
      flex-shrink: 0;
      border-radius: 10px;
      border: 1px solid var(--blue, #006dab);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      color: var(--blue, #006dab);
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      background: none;
    }
  }
`;

export const listCarWrapper = styled.div`
  display: grid;
  grid-template-areas: "a";
  gap: 20px;
`;
export const ListContainer = styled.div`
  display: flex;
  margin-top: 37px;
  height: 180px;
  gap: 30px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 15px;
  .lift-wrapper {
    width: 605px;
    padding: 5px;
    .name-price {
      display: flex;
      justify-content: space-between;
      .name-of-the-car {
        color: var(--text, #373737);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      .price {
        color: var(--blue, #006dab);
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    .brand-star {
      display: flex;
      margin-top: 4px;
      align-items: center;
      justify-content: space-between;
      p {
        color: var(--text, #373737);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .rate-star {
        display: flex;
        gap: 2px;
      }
    }
    .btn-wrapper {
      display: flex;
      margin-top: 44px;
      gap: 14.68px;
      button {
        width: 291.325px;
        height: 35px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 1px solid var(--blue, #006dab);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
        background: none;
        color: var(--blue, #006dab);
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }
`;
export const ListImg = styled.div`
  display: flex;
  img{
    width: 280px;
  }
`;
