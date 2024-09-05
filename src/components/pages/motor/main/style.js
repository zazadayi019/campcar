import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
export const ShopWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  gap: 30px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  b {
    color: var(--text, #373737);
    /* border: 1px solid red; */
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
  }
  .filter-line {
    width: 240px;
    height: 1px;
    background: rgba(55, 55, 55, 0.3);
    margin-top: 15px;
  }
  .lab-inp-con {
    display: flex;
    margin-top: 30px;
    gap: 25px;
    .lab-inp-wrapper {
      display: flex;
      flex-direction: column;
      gap: 3px;
      label {
        color: var(--text, #373737);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
      }
      input {
        display: flex;
        width: 91px;
        height: 36px;
        flex-shrink: 0;
        border-radius: 10px;
        border: 1px solid rgba(55, 55, 55, 0.6);
      }
    }
  }
  .check-box-items {
    display: flex;
    flex-direction: column;
    .title-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chek-box-con {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 30px;
    }
    .chek-box-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;

      /* border: 1px solid red; */
      input {
        width: 22px;
        height: 22px;
        flex-shrink: 0;
        border-radius: 5px;
        border: 1px solid #666;
        background: #fff;
      }
      label {
        color: var(--text, #373737);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 14px */
      }
    }
  }
  .btn-wrapper {
    display: flex;
    flex-shrink: 0;
    gap: 8.2px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      width: 115.804px;
      height: 38.968px;
      border-radius: 60px;
      background: var(--sariq, #ff7a00);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .filter123-image {
    display: flex;
    flex-direction: column;
    gap: 8px;
    b {
      color: var(--blue, #006dab);
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .img123-wrapper {
      display: flex;
      gap: 8px;
      img {
        width: 76px;
        height: 90px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
export const DataWrapper = styled.div`
  /* border: 1px solid green; */
`;
export const DataFilterCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 956px;
`;
export const DataFilterLift = styled.div`
  display: flex;
  .filter-lift {
    display: flex;
    gap: 10px;
    p {
      color: var(--text, #373737);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%; /* 18px */
    }
    b {
      color: var(--blue, #006dab);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%;
    }
  }
`;
export const DataFilterRight = styled.div`
  display: flex;
  margin-top: -1.3px;
  /* border: 1px solid blue; */
  gap: 15px;
  .input-wrapper {
    display: flex;
    align-items: center;
    label {
      color: var(--text, #373737);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
    }
    input {
      display: flex;
      margin-left: 10px;
      padding-left: 10px;
      width: 227px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      flex-shrink: 0;
    }
    img {
      width: 30px;
      height: 30px;
      margin-left: -30px;
      padding: 7px 7px 8px 8px;
      flex-shrink: 0;
      border-radius: 0px 5px 5px 0px;
      border: 1px solid rgba(55, 55, 55, 0.3);
    }
  }
  .right-wrapper {
    display: flex;
    input {
      padding-left: 10px;
      width: 80px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
    }
    img {
      margin-left: -30px;
      padding: 7px 7px 8px 8px;
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 0px 5px 5px 0px;
      border: 1px solid rgba(55, 55, 55, 0.3);
    }
  }
  .grid-list {
    display: flex;
    .grid {
      width: 41px;
      height: 30px;
      flex-shrink: 0;
      padding: 6px 11px 6px 12px;
      border-radius: 5px 0px 0px 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      background: #fafafa;
    }
    .list {
      width: 40px;
      height: 30px;
      flex-shrink: 0;
      padding: 4px 9px;
      border-radius: 0px 5px 5px 0px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      background: #fafafa;
    }
  }
`;
export const DataLine = styled.img`
  display: flex;
  align-items: center;
  width: 956px;
  height: 1px;
  background: rgba(55, 55, 55, 0.5);
  margin-top: 6px;
  /* border: 1px solid red; */
`;
