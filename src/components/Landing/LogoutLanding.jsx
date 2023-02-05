import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Logout.style";
import Header from "../common/header/Header";
import Background from "../common/Background";
import { Galmuri } from "../../css/Font";
import { PinkButton } from "../common/PinkButton.style";
import landingimage from "../../assets/images/Landing/landinglogo.svg";

const LogoutLanding = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <Background>
        <Header />
        <S.TitleBar>
          <Galmuri size="13px" weight="400" padding="5px">
            내 소원을 응원하는 마음이 가득 담긴
          </Galmuri>
          <Galmuri size="15px" weight="700" padding="5px">
            나만의 부적을 만들어보세요!
          </Galmuri>
        </S.TitleBar>
        <S.ImageWrapper>
          <S.Image src={landingimage} />
        </S.ImageWrapper>
        <PinkButton width="173px" height="50px" radius="30px" onClick={onClick}>
          부적 만들러 가기
        </PinkButton>
        <S.Space></S.Space>
      </Background>
    </>
  );
};

export default LogoutLanding;
