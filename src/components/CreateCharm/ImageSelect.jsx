import React, { useState, useEffect } from "react";
import * as S from "./CreateCharm.style";
import charm0 from "../../assets/images/Charm/0charm.svg";
import charm2 from "../../assets/images/Charm/1charm.svg";
import charm4 from "../../assets/images/Charm/2charm.svg";
import charm6 from "../../assets/images/Charm/3charm.svg";
import charm8 from "../../assets/images/Charm/4charm.svg";
import charm10 from "../../assets/images/Charm/5charm.svg";
import charm1 from "../../assets/images/Charm/6charm.svg";
import charm3 from "../../assets/images/Charm/7charm.svg";
import charm5 from "../../assets/images/Charm/8charm.svg";
import charm7 from "../../assets/images/Charm/9charm.svg";
import charm9 from "../../assets/images/Charm/10charm.svg";
import charm11 from "../../assets/images/Charm/11charm.svg";

const ImageSelect = ({ setDesign }) => {
  const src = [
    charm0,
    charm1,
    charm2,
    charm3,
    charm4,
    charm5,
    charm6,
    charm7,
    charm8,
    charm9,
    charm10,
    charm11,
  ];
  const [clicked, setClicked] = useState({
    zero: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
  });
  useEffect(() => {
    if (clicked.zero === true) setDesign(0);
    else if (clicked.one === true) setDesign(6);
    else if (clicked.two === true) setDesign(1);
    else if (clicked.three === true) setDesign(7);
    else if (clicked.four === true) setDesign(2);
    else if (clicked.five === true) setDesign(8);
    else if (clicked.six === true) setDesign(3);
    else if (clicked.seven === true) setDesign(9);
    else if (clicked.eight === true) setDesign(4);
    else if (clicked.nine === true) setDesign(10);
    else if (clicked.ten === true) setDesign(5);
    else if (clicked.eleven === true) setDesign(11);
    else setDesign("");
  }, [clicked]);
  return (
    <>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: true,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[0]} />
        <S.Circle>
          {clicked.zero === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: true,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[1]} />
        <S.Circle>{clicked.one === true ? <S.CheckedCircle /> : null}</S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: true,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[2]} />
        <S.Circle>{clicked.two === true ? <S.CheckedCircle /> : null}</S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: true,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[3]} />
        <S.Circle>
          {clicked.three === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: true,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[4]} />
        <S.Circle>
          {clicked.four === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: true,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[5]} />
        <S.Circle>
          {clicked.five === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: true,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[6]} />
        <S.Circle>{clicked.six === true ? <S.CheckedCircle /> : null}</S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: true,
            eight: false,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[7]} />
        <S.Circle>
          {clicked.seven === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: true,
            nine: false,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[8]} />
        <S.Circle>
          {clicked.eight === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: true,
            ten: false,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[9]} />
        <S.Circle>
          {clicked.nine === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: true,
            eleven: false,
          })
        }
      >
        <S.CharmImg src={src[10]} />
        <S.Circle>{clicked.ten === true ? <S.CheckedCircle /> : null}</S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            zero: false,
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: true,
          })
        }
      >
        <S.CharmImg src={src[11]} />
        <S.Circle>
          {clicked.eleven === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
    </>
  );
};

export default React.memo(ImageSelect);
