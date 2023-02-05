import React, { useEffect, useState } from "react";

// import style.js & fonts
import * as S from "./LoginRegister.style";
import { NanoomSquare } from "../../css/Font";
import Background from "../common/Background";

// import Images
import idIcon from "../../assets/images/Login/idicon.png";
import pwIcon from "../../assets/images/Login/pwicon.png";
import nicknameIcon from "../../assets/images/Login/nicknameicon.png";

// import api
import { RequestSignin } from "../../api/user";
import { useNavigate } from "react-router-dom";

const RegisterMenu = () => {
  // 아이디 중복 확인 방식 어떻게 할 지 정하기 -> lower priority
  // 이외 모든 기능 퍼블리싱 완료

  const navigate = useNavigate();

  // Input 상태 관리
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [nickname, setNickname] = useState("");

  // active Input 관리
  const [activeBorder, setActiveBorder] = useState("");

  // 비밀번호 확인
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    if (pw2 !== "" && pw === pw2) setIsValidPassword(true);
    else setIsValidPassword(false);
  }, [pw2]);

  // Submit
  const onSubmitAccount = e => {
    e.preventDefault();
    RequestSignin(id, pw, nickname)
      .then(response => {
        navigate("/auth/login");
      })
      .catch(error => {
        if (error.response.status === 400) {
          setId("");
          alert("이미 존재하는 아이디입니다. 다시 입력해주세요");
          return;
        }
      });
  };

  return (
    <>
      <Background>
        <S.TitleBar>
          <NanoomSquare weight="800" size="20px" color="#3A3A3A">
            나만의 부적을 만들어볼까요?
          </NanoomSquare>
        </S.TitleBar>
        <S.LoginBox height="425px">
          <NanoomSquare weight="800" size="18px" margin="30px">
            회원가입
          </NanoomSquare>
          <S.InputForm onSubmit={onSubmitAccount}>
            <S.Input
              type="text"
              placeholder="아이디"
              icon={idIcon}
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
              onFocus={() => setActiveBorder("id")}
            />
            <S.Input
              type="password"
              placeholder="비밀번호"
              fontFamily="Pretendard"
              fontWeight="400"
              icon={pwIcon}
              value={pw}
              onChange={e => {
                setPw(e.target.value);
              }}
              onFocus={() => setActiveBorder("pw")}
            />
            <S.Input
              type="password"
              placeholder="비밀번호 확인"
              fontFamily="Pretendard"
              fontWeight="400"
              icon={pwIcon}
              value={pw2}
              onChange={e => {
                setPw2(e.target.value);
              }}
              onFocus={() => setActiveBorder("pw2")}
            />
            <S.Input
              type="text"
              placeholder="닉네임"
              icon={nicknameIcon}
              value={nickname}
              onChange={e => {
                setNickname(e.target.value);
              }}
              onFocus={() => setActiveBorder("name")}
            />
            {
              {
                // id: <S.Text>아이디 형식 제공</S.Text>,
                // pw: <S.Text>비밀번호 형식 제공</S.Text>,
                pw2: isValidPassword ? (
                  <S.Text color="green">비밀번호가 일치합니다.</S.Text>
                ) : (
                  <S.Text color="red">비밀번호가 일치하지 않습니다.</S.Text>
                ),
                name:
                  nickname.length > 8 ? (
                    <S.Text color="red">
                      닉네임을 8글자 이하로 설정해주세요.
                    </S.Text>
                  ) : (
                    <S.Text color="green">
                      닉네임을 8글자 이하로 설정해주세요.
                    </S.Text>
                  ),
              }[activeBorder]
            }
            <S.Button type="submit">
              <NanoomSquare weight="800" size="15px" color="#545454">
                회원가입
              </NanoomSquare>
            </S.Button>
          </S.InputForm>
        </S.LoginBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Background>
    </>
  );
};

export default RegisterMenu;
