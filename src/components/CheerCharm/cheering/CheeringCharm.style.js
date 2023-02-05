import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CharmContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  padding: 10px;
`;

export const CharmImg = styled.img`
  width: 40%;
  height: auto;
  padding: 20px;
  filter: blur(3px);
`;

export const BubbleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  div {
    position: absolute;
    font-family: "Galmuri";
    font-stretch: condensed;
    font-weight: 400;
    font-size: 14px;
  }
  .text2 {
    margin-top: 45px;
  }
`;

export const BubbleImg = styled.img`
  opacity: 0.8;
  width: 220px;
  height: auto;
`;

export const LinkRect = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    width: 125px;
    height: 24px;
    background: #f1f1f1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    svg {
      margin: 0 2px 1px 0;
    }
  }
`;

export const CheerTitleContainer = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  margin-top: 20px;
  .icon {
    margin-right: 5px;
  }
  .inner {
    width: 85%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .one {
    display: flex;
  }
`;

export const CheerTitle = styled.div`
  height: 20px;
  font-family: "PFStardust";
  font-size: 17px;
  line-height: 17px;
  flex-shrink: 0;
  padding-left: 3px;
  margin-top: 4px;
`;

export const CheerTitleBlue = styled.div`
  height: 28px;
  font-family: "PFStardust";
  font-size: 21px;
  line-height: 21px;
  color: #748edb;
  flex-shrink: 0;
  padding-left: 5px;
`;

export const CheerContainer = styled.div`
  width: 90%;
  height: 150px;
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    overflow-x: auto;
    width: 90%;
    height: 145px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  .inner {
    position: relative;
    width: 48%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 490px) {
    width: 70%;
    justify-content: center;
    .inner {
      position: relative;
      width: 170px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
    }
  }
`;

export const ButtonImg = styled.img`
  width: 90%;
  height: auto;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
  padding: 5px;
  position: absolute;
  @media (min-width: 470px) {
    width: 80%;
  }
`;

export const ButtonText = styled.div`
  font-family: "PFStardust";
  font-size: 3.5vw;
  text-align: center;
  position: relative;
  z-index: 5;
  padding: 0 3px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 470px) {
    font-size: 13px;
  }
`;
