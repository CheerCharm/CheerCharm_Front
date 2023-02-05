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
`;

export const ButtonContainer = styled.div`
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRect = styled.div`
  width: 130px;
  height: 24px;
  background: #f1f1f1;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2));
  svg {
    margin: 0 3px 1px 0;
  }
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
  margin-bottom: 20px;
`;

export const BubbleImg = styled.img`
  opacity: 0.8;
  width: 220px;
  height: auto;
`;

export const CheerTitleContainer = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  margin-top: 30px;
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
  height: auto;
  margin: 20px 0 50px 0;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding: 10px;
  }
`;
