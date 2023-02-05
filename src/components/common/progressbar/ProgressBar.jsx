import React from "react";
import * as S from "./ProgressBar.style";
import clovericon from "../../../assets/images/Landing/clover.svg";

const ProgressBar = props => {
  // 퍼센트는 프론트에서 구하는 것
  // 응원 개수 / 채워야하는 개수를 반올림해서 정수로 표현
  // 퍼센트에 저장 + 프로그레스 바 이동
  // 이 때 응원 개수와 채워야하는 개수를 api 통해서 받아올 것

  const percent = parseInt((props.done / props.total) * 100) || 0;

  return (
    <>
      <S.Container>
        <S.ProgressContainer>
          <S.CloverIcon percent={percent}>
            <object
              type="image/svg+xml"
              data={clovericon}
              width="20"
              height="20"
            >
              <img src={clovericon} />
            </object>
          </S.CloverIcon>
          <S.CloverProgress>
            <div className="inner">
              <S.Progress percent={percent}></S.Progress>
            </div>
          </S.CloverProgress>
        </S.ProgressContainer>
        {props.isRight ? <S.FontWrapper>{percent}%</S.FontWrapper> : null}
      </S.Container>
      {props.isRight ? null : (
        <S.UnderFontWrapper>{percent}%</S.UnderFontWrapper>
      )}
    </>
  );
};

export default ProgressBar;
