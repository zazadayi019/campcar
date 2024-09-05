import styled from "styled-components";

export const NavCon = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 90px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  top: 0;
  .item-wrapper {
    display: flex;
    /* border: 1px solid red; */
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  width: 1440px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MenuCon = styled.div`
  display: flex;
  width: 684px;
  align-items: center;
  /* border: 1px solid red; */
  justify-content: space-between;
  display: inline-flex;
  padding: 10px;
  color: var(--text, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const RightCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 132px;
`;
