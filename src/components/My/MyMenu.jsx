import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as S from "./My.style";
import Header from "../common/header/Header";
import { RequestGetUser } from "../../api/user";
import { RequestLogout } from "../../api/user";
import Footer from "../common/footer/Footer";
import { Galmuri } from "../../css/Font";
import MyList from "./MyList";
import Background from "../common/Background";

const MyMenu = () => {
  const nav = useNavigate();
  const [nickname, setNickname] = useState("");
  const [isDoneTab, setIsDoneTab] = useState(false);
  useEffect(() => {
    RequestGetUser().then(res => {
      if (res) {
        setNickname(res.data.data.nickname);
      }
    });
  }, []);
  return (
    <>
      <Background>
        <Header />
        <S.Top>
          <div style={{ display: "flex" }}>
            <Galmuri weight="600" size="16px" color="#4A4A4A">
              {nickname}
            </Galmuri>
          </div>
          <Galmuri
            weight="400"
            size="12px"
            margin="4px 0 0 0"
            onClick={() => RequestLogout()}
          >
            로그아웃
          </Galmuri>
        </S.Top>
        <S.Border />
        <S.MyBox>
          <S.TabTitle>
            <Galmuri
              weight="400"
              size="14px"
              onClick={() => {
                setIsDoneTab(false);
              }}
              style={{ textDecoration: isDoneTab ? null : "underline" }}
            >
              아직 응원이 부족함
            </Galmuri>
            <Galmuri
              weight="400"
              size="14px"
              onClick={() => {
                setIsDoneTab(true);
              }}
              style={{ textDecoration: isDoneTab ? "underline" : null }}
            >
              완성된 부적함
            </Galmuri>
          </S.TabTitle>
          {isDoneTab ? <MyList isDone={true} /> : <MyList isDone={false} />}
        </S.MyBox>
        <Footer />
      </Background>
    </>
  );
};

export default MyMenu;
