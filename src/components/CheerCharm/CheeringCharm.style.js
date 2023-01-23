import styled from "styled-components";
import background from "../../assets/images/background.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-repeat: repeat-y;
  background-size: 100%;
  position: relative;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 50%;
  padding: 40px;
`;

export const CharmContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

export const CharmImg = styled.img`
  width: 40%;
  height: auto;
  padding: 20px;
  filter: blur(2px);
  opacity: 0.6;
`;

export const BubbleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  width: 125px;
  height: 24px;
  background: #f1f1f1;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  svg {
    margin: 0 2px 1px 0;
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
  height: 155px;
  margin: 20px 0 40px 0;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    overflow-x: auto;
    width: 90%;
    height: 140px;
  }
`;
