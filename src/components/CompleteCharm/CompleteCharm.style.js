import styled from "styled-components";
import frontImage from "../../assets/images/CompletedCharm/example_front.png";
import backImage from "../../assets/images/CompletedCharm/example_back.png";
// import backImage from "../../assets/images/CompletedCharm/charming_export.png";

export const Container = styled.div`
  width: 100%;
  margin-top: 12px;
  height: 300px;
  /* border: solid 1px; */

  display: flex;
  align-items: center;
`;

export const FlipWrapper = styled.div`
  width: 170px;
  height: 260px;
  perspective: 1000px;

  position: absolute;
  z-index: 1;

  left: ${props => props.left};
  filter: blur(${props => props.blur});
  backface-visibility: hidden;
  /* transition: 1s linear; */
`;

export const FrontWrapper = styled.div`
  width: 170px;
  height: 240px;
  position: absolute;
  backface-visibility: hidden;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateY(${props => (props.cur ? 0 : -180)}deg);
  transition: 1s linear;
`;

export const BackWrapper = styled.div`
  width: 170px;
  height: 240px;
  position: absolute;
  backface-visibility: hidden;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotateY(${props => (props.cur ? 0 : 180)}deg);
  transition: 1s linear;
`;

export const Cloud = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  /* width: 50%;
  height: 90%;
  background-size: contain;
  /* border: solid 1px; */
  /* background-repeat: no-repeat; */
`;
