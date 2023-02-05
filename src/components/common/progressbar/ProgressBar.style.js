import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30px;
  position: relative;
  overflow: hidden;
  /* border: solid 1px; */
`;

export const ProgressContainer = styled.div`
  /* border: solid 1px; */
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: initial;
`;

export const CloverProgress = styled.div`
  width: 134px;
  height: 12px;
  border: 1px solid #000;
  border-radius: 7.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  .inner {
    width: 132px;
    height: 10px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
`;

export const Progress = styled.div`
  width: 100%;
  position: absolute;
  left: ${props => -100 + props.percent}%;
  top: 0px;
  height: 100%;
  background-color: rgba(110, 190, 124, 0.59);
  border-radius: 7.5px;

  // 애니메이션 관련, 미완

  /* transform-origin: left;
  animation: scaleX 1s forwards ease-out;

  @keyframes scaleX {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(${props => props.percent * 0.01});
    }
  } */
`;

export const CloverIcon = styled.div`
  position: absolute;
  /* border: solid 1px; */
  left: ${props => -7 + props.percent}%;
  z-index: 5;
  width: 20px;
  height: 23px;
  transform: rotate(-33.39deg);
  overflow-x: initial;

  // 애니메이션 관련, 미완

  /* transform-origin: left;
  animation: translateX 1s forwards ease-out;

  @keyframes translateX {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(${props => -7 + props.percent}%);
      transform: translateX(23px);
    }
  } */
`;

export const FontWrapper = styled.div`
  /* border: solid 1px; */
  width: 45px;
  display: flex;
  justify-content: flex-end;
  font-family: "Galmuri";
  font-weight: 700;
  margin-bottom: 3.5px;
`;

export const UnderFontWrapper = styled.div`
  font-family: "Galmuri";
  font-stretch: condensed;
  font-weight: 400;
  font-size: 14px;
  height: 25px;
  display: flex;
  align-items: center;
`;
