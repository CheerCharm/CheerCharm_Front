import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import style.js & fonts
import * as S from "./LoginRegister.style";
import { NanoomSquare } from "../../css/Font";
import Background from "../common/Background";

// import Images
import idIcon from "../../assets/images/Login/idicon.png";
import pwIcon from "../../assets/images/Login/pwicon.png";
import kakao from "../../assets/images/Login/kakao3.svg";

// import Components
import Footer from "../common/footer/Footer";

// import api
import { RequestLogin } from "../../api/user";

const LoginMenu = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const REST_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "https://cheer-charm.vercel.app/oauth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 회원가입 navigate
  const navigate = useNavigate();

  // 로그인 기능 함수
  const Login = e => {
    e.preventDefault();

    if (!id) {
      return alert("아이디를 입력해주세요");
    } else if (!pw) {
      return alert("비밀번호를 입력해주세요");
    } else {
      RequestLogin(id, pw)
        .then()
        .catch(error => {
          if (error.response.status === 400) {
            alert("로그인 실패.\n 다시 시도해주세요.");
            setId("");
            setPw("");
          }
        });
    }
  };

  return (
    <>
      <Background>
        <S.TitleBar>
          <NanoomSquare weight="800" size="20px" color="#3A3A3A">
            나만의 부적을 만들어볼까요?
          </NanoomSquare>
        </S.TitleBar>
        <S.LoginBox height="380px">
          <NanoomSquare weight="800" size="18px" margin="30px">
            로그인
          </NanoomSquare>
          <S.InputForm onSubmit={Login}>
            <S.Input
              type="text"
              placeholder="아이디"
              fontFamily="NanoomSquare"
              icon={idIcon}
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
            />
            <S.Input
              type="password"
              fontFamily="Pretendard"
              fontWeight="300"
              placeholder="비밀번호"
              icon={pwIcon}
              value={pw}
              onChange={e => {
                setPw(e.target.value);
              }}
            />

            <S.Button type="submit">
              <NanoomSquare weight="800" size="15px" color="#545454">
                로그인
              </NanoomSquare>
            </S.Button>
          </S.InputForm>
          <S.ButtonforRegister onClick={() => navigate("/auth/join")}>
            회원가입
          </S.ButtonforRegister>
        </S.LoginBox>
        <S.Line>
          <S.Hr></S.Hr>
          <NanoomSquare weight="800" size="10px" color="#FFFFFF">
            OR
          </NanoomSquare>
          <S.Hr></S.Hr>
        </S.Line>
        <br />
        <a href={KAKAO_AUTH_URL}>
          <S.KakaoImage src={kakao} />
        </a>
        <br />
        <Footer />
      </Background>
    </>
  );
};

export default LoginMenu;
