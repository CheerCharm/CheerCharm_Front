import React, { useEffect, useState } from "react";
import cloud from "../../assets/images/CharmImage/clouds.png";
import * as S from "./CompleteCharm.style";

// 완성된 부적의 애니메이션
const CompleteCharm = props => {
  const [front, setFront] = useState(true);

  useEffect(() => {
    setFront(props.click);
  });

  useEffect(() => {}, []);
  return (
    <>
      <S.Cloud src={cloud} />
      <S.Container>
        <S.FlipWrapper left="32%" blur="2px">
          <S.FrontWrapper cur={!front}></S.FrontWrapper>
          <S.BackWrapper cur={front}></S.BackWrapper>
        </S.FlipWrapper>
        <S.FlipWrapper left="27%">
          <S.FrontWrapper cur={front}></S.FrontWrapper>
          <S.BackWrapper cur={!front}></S.BackWrapper>
        </S.FlipWrapper>
      </S.Container>
    </>
  );
};

export default CompleteCharm;
