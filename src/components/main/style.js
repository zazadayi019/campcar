import styled from "styled-components";

export const RekommendWrapp = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`;

export const RekommendCon = styled.div`
  display: flex;
  flex-direction: column;
  b {
    color: var(--text, #373737);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  div {
    margin-top: 4.5px;
    width: 188.5px;
    height: 2px;
    background: #ff7a00;
  }
`;

export const CarouselWrapp = styled.div`
  display: flex;
  margin-top: 39.5px;
  justify-content: center;
  gap: 20px;
`;

export const CartlWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 276px;
  height: 319px;
  flex-shrink: 0;
  img {
    width: 276px;
  }
  p {
    margin-top: 15px;
    color: var(--text, #373737);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  b {
    margin-top: 10px;
    padding: 12px 40px;
    width: 259px;
    height: 45px;
    flex-shrink: 0;
    background: #006dab;
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const DropWrapp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  gap: 23px;
  /* border: 1px solid red; */
  h3 {
    color: var(--text, #373737);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  img {
    width: 15px;
    flex-shrink: 0;
  }
`;

export const VideosWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideosCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  b {
    color: var(--text, #373737);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  div {
    margin-top: 4.5px;
    width: 100px;
    height: 2px;
    background: #ff7a00;
  }
`;
export const VideosCartWrap = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  gap: 20px;
  margin-top: 39.52px;
`;

export const VideosCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BGimg = styled.div`
  img {
    width: 292px;
    height: 292px;
    flex-shrink: 0;
  }
`;

export const PlayBtn = styled.div`
  img {
    margin-left: -175px;
    display: flex;
    width: 58px;
    height: 58px;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 14px 16px 15px 17px;
  }
`;

export const BlogsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlogsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 4.5px;
  b {
    color: var(--text, #373737);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  div {
    width: 90px;
    height: 2px;
    background: #ff7a00;
  }
`;
export const BlogsItems = styled.div`
  display: flex;
  margin-top: 30.45px;
  gap: 33px;
`;

export const BlogsTitle = styled.div`
  display: flex;
  flex-direction: column;
  b {
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h3 {
    margin-top: 35px;
    color: var(--sariq, #ff7a00);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    margin-top: 9.95px;
    width: 380px;
    height: 124px;
    flex-shrink: 0;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const BlogsCart = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  gap: 20px;
  img {
    width: 258px;
    height: 258px;
    flex-shrink: 0;
    border-radius: 20px;
  }
`;
