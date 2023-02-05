import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import package
import html2canvas from "html2canvas";

// import api
import { UploadImage } from "../../api/charm";

// import template
import yellow from "../../assets/images/CharmImage/template_yellow.svg";
import pink from "../../assets/images/CharmImage/template_pink.svg";
import purple from "../../assets/images/CharmImage/template_purple.svg";
import blue from "../../assets/images/CharmImage/template_blue.svg";
import green from "../../assets/images/CharmImage/template_green.svg";
import mint from "../../assets/images/CharmImage/template_mint.svg";

import brown from "../../assets/images/CharmImage/template_brown.svg";
import warmpink from "../../assets/images/CharmImage/template_warmpink.svg";
import red from "../../assets/images/CharmImage/template_red.svg";
import warmblue from "../../assets/images/CharmImage/template_warmblue.svg";
import warmgreen from "../../assets/images/CharmImage/template_warmgreen.svg";
import orange from "../../assets/images/CharmImage/template_orange.svg";

// import animal
import yellow_animal from "../../assets/images/CharmImage/animal_yellow.svg";
import pink_animal from "../../assets/images/CharmImage/animal_pink.svg";
import purple_animal from "../../assets/images/CharmImage/animal_purple.svg";
import blue_animal from "../../assets/images/CharmImage/animal_blue.svg";
import green_animal from "../../assets/images/CharmImage/animal_green.svg";
import mint_animal from "../../assets/images/CharmImage/animal_mint.svg";

import brown_animal from "../../assets/images/CharmImage/animal_brown.svg";
import warmpink_animal from "../../assets/images/CharmImage/animal_warmpink.svg";
import red_animal from "../../assets/images/CharmImage/animal_red.svg";
import warmblue_animal from "../../assets/images/CharmImage/animal_warmblue.svg";
import warmgreen_animal from "../../assets/images/CharmImage/animal_warmgreen.svg";
import orange_animal from "../../assets/images/CharmImage/animal_orange.svg";

// 부적 디자인 정리
const design = [
  /*
  {
    id: 순서대로,
  template: 배경, 
  animal: 캐릭터, 
  border: wrapper의  boder 컬러, 
  background: wrapper의 bacground 컬러
  }
  */

  {
    id: 0,
    template: yellow,
    animal: yellow_animal,
    border: "#F5DA93",
    background: "#FFFAED",
  },
  {
    id: 1,
    template: pink,
    animal: pink_animal,
    border: "#FDB3EE",
    background: "#FFEBFC",
  },
  {
    id: 2,
    template: purple,
    animal: purple_animal,
    border: "#AD9AE2",
    background: "#F1EBFF",
  },
  {
    id: 3,
    template: blue,
    animal: blue_animal,
    border: "#A3C3E0",
    background: "#E2EEFF",
  },
  {
    id: 4,
    template: green,
    animal: green_animal,
    border: "#AFDB94",
    background: "#F0F6EA",
  },
  {
    id: 5,
    template: mint,
    animal: mint_animal,
    border: "#84BDA2",
    background: "#E6F5EB",
  },
  {
    id: 6,
    template: brown,
    animal: brown_animal,
    border: "#A17F6C",
    background: "#F3E6DD",
  },
  {
    id: 7,
    template: warmpink,
    animal: warmpink_animal,
    border: "#F6B4B4",
    background: "#FFEEEE",
  },
  {
    id: 8,
    template: red,
    animal: red_animal,
    border: "#ED726B",
    background: "#FAECEC",
  },
  {
    id: 9,
    template: warmblue,
    animal: warmblue_animal,
    border: "#83A3C1",
    background: "#EBF3FF",
  },
  {
    id: 10,
    template: warmgreen,
    animal: warmgreen_animal,
    border: "#819A87",
    background: "#E8F3E9",
  },
  {
    id: 11,
    template: orange,
    animal: orange_animal,
    border: "#FFBD70",
    background: "#FFF8EE",
  },
];

const CharmImage = props => {
  const formData = new FormData();
  const { num } = props;

  if (props.upload) {
    html2canvas(document.getElementById("capture_front"), {
      backgroundColor: null,
      allowTaint: true,
      useCORS: true,
    }).then(canvas => {
      canvas.toBlob(function (blob) {
        formData.append("file_front", blob);
      });
      html2canvas(document.getElementById("capture_back"), {
        backgroundColor: null,
        allowTaint: true,
        useCORS: true,
      }).then(canvas => {
        canvas.toBlob(function (blob) {
          formData.append("file_back", blob);
          UploadImage(props.id, formData)
            .then(response => {
              //console.log(response);
            })
            .catch(error => {
              //console.log(error);
            });
        });
      });
    });
  }
  useEffect(() => {}, [formData]);

  // 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <>
      <Container>
        <Template id="capture_front">
          <img className="background" src={design[num].template} />
          <Character src={design[num].animal} />
          <Wrapper
            front={true}
            background={design[num].background}
            border={design[num].border}
          >
            <div className="front">{props.title}</div>
          </Wrapper>
        </Template>
        <Template id="capture_back">
          <img className="background" src={design[num].template} />
          <Character src={design[num].animal} />
          <Wrapper
            front={false}
            background={design[num].background}
            border={design[num].border}
          >
            <div className="back">
              당신이 받은 {props.title}!
              <br />이 부적을 지니고 있으면 당신의 소망이 현실이 됩니다.
            </div>
          </Wrapper>
        </Template>
        <ModalBox>
          <TextWrapper>
            <div className="track">
              <div className="content">
                부적 생성중 . . . 부적 생성중 . . . 부적 생성중 . . . 부적
                생성중 . . . 부적 생성중 . . . 부적 생성중 . . .&nbsp;
              </div>
            </div>
            <div className="notice">
              PC 환경에서는 부적 이미지의 비율이 망가질 수도 있어요.
            </div>
          </TextWrapper>
        </ModalBox>
        {/* <button onClick={() => onCapture()}>다운로드</button> */}
      </Container>
    </>
  );
};

export default CharmImage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #f5f5f5;
  z-index: -5;
  margin-top: 70px;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 90%;
  font-family: PFstardust;
  margin-top: 270px;
  height: 60px;
  overflow-x: hidden;
  overflow-y: hidden;
  .notice {
    font-family: PFstardust;
    color: #929292;
    font-size: 11px;
    text-align: center;
  }
  .track {
    margin-top: 20px;
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 5s linear infinite;
  }
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @media (hover: hover) and (min-width: 700px) {
    .animated-title .content {
      -webkit-transform: translateY(calc(100% - 8rem));
      transform: translateY(calc(100% - 8rem));
    }
  }
`;

const Template = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;

  height: 270px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background {
    position: absolute;
    z-index: -1;
  }
`;

const Character = styled.img`
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 105px;
  height: 144px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  // props로 받아올 것 (background color, border clolr)
  background-color: ${props => props.background};
  border: 3px solid;
  border-color: ${props => props.border};
  border-radius: 10px;

  font-family: PFstardust;
  text-align: center;

  .front {
    width: 70px;
    height: 120px;

    font-size: 24px;
    line-height: 24px;

    text-align: center;
    display: flex;
    align-items: center;
  }

  .back {
    width: 90px;
    height: 135px;

    font-size: 13px;
    line-height: 13px;

    text-align: center;
    display: flex;
    align-items: center;
  }
`;
