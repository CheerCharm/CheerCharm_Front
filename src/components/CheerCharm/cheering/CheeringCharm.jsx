import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./CheeringCharm.style";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import ProgressBar from "../../common/progressbar/ProgressBar";
import CheeringList from "./CheeringList";
import PopUp from "../PopUp";
import speechbubble from "../../../assets/images/CharmPage/speechbubble.svg";
import button1 from "../../../assets/images/CharmPage/button1.svg";
import button2 from "../../../assets/images/CharmPage/button2.svg";
import { NanoomSquare, Galmuri } from "../../../css/Font.js";
import { AiOutlineLink } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Background from "../../common/Background";
import { GetCharm } from "../../../api/charm";
import { RequestGetUser } from "../../../api/user";

const CheeringCharm = () => {
  const isLogin = !!localStorage.getItem("token");
  const params = useParams();
  const nav = useNavigate();
  const currentURL = window.location.href;
  const [modal, setModal] = useState(false);
  const [currentCharm, setCurrentCharm] = useState({});
  const [total, setTotal] = useState(0);
  const [cur, setCur] = useState(0);
  const [imgsrc, setImgsrc] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    GetCharm(params.charm_id)
      .then(res => {
        setCurrentCharm(res.data.data);
        setTotal(res.data.data.total_cheer);
        setCur(res.data.data.cur_cheer);
        setImgsrc(res.data.data.charm_image[0]);
      })
      .catch();
    RequestGetUser().then(res => {
      if (res) setCurrentUser(res.data.data.id);
    });
  }, []);
  const [isMine, setIsMine] = useState(false);
  useEffect(() => {
    if (params.user === currentUser) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  }, [currentUser]);
  return (
    <>
      <Background>
        <Header type={isLogin ? "login" : "logout"} />
        <S.CharmContainer>
          {imgsrc && <S.CharmImg src={imgsrc.img_front} />}
        </S.CharmContainer>
        <Galmuri size="18px" weight="700" color="#3A3A3A" margin="0 0 10px 0">
          {currentCharm.title}
        </Galmuri>
        <ProgressBar total={total} done={cur} isRight={false} />
        <S.BubbleContainer>
          <S.BubbleImg src={speechbubble} />
          <div className="text1">
            부적이 완성되려면 응원 {total - cur} 개가 더 필요해요
          </div>
          <div className="text2">｡ﾟ(ﾟ Ĭ ^ Ĭ ﾟ )ﾟ｡</div>
        </S.BubbleContainer>
        {isMine ? (
          <CopyToClipboard
            text={currentURL}
            onCopy={() => {
              alert(
                "현재 부적 링크를 클립보드에 복사했습니다.\n다양한 곳에 공유하여 응원을 모아보세요!",
              );
            }}
          >
            <S.LinkRect>
              <AiOutlineLink size="12" />
              <NanoomSquare size="11px" weight="400">
                내 부적 링크 복사하기
              </NanoomSquare>
            </S.LinkRect>
          </CopyToClipboard>
        ) : null}
        {isMine ? null : (
          <S.ButtonContainer>
            <div
              className="inner"
              onClick={() =>
                nav(`/${params.user}/charm_id/${params.charm_id}/send-cheer`)
              }
            >
              <S.ButtonImg src={button1} />
              <S.ButtonText>응원 남기기 ♬</S.ButtonText>
            </div>
            <div
              className="inner"
              onClick={() => nav(isLogin ? "/create-charm" : "/")}
            >
              <S.ButtonImg src={button2} />
              <S.ButtonText>나도 부적 만들기 ♪</S.ButtonText>
            </div>
          </S.ButtonContainer>
        )}
        <S.CheerTitleContainer>
          <S.CheerTitleBlue className="icon">💌</S.CheerTitleBlue>
          <div className="inner">
            <S.CheerTitleBlue className="name">
              {currentCharm.nickname}
            </S.CheerTitleBlue>
            <S.CheerTitle>님에게 도착한</S.CheerTitle>
            <div className="one">
              <S.CheerTitleBlue>{cur}</S.CheerTitleBlue>
              <S.CheerTitle>개의 응원</S.CheerTitle>
            </div>
          </div>
        </S.CheerTitleContainer>
        <S.CheerContainer>
          <div className="inner">
            <CheeringList modal={modal} setModal={setModal} />
          </div>
        </S.CheerContainer>
        <Footer />
      </Background>
      {modal ? (
        <PopUp
          isModalOpen={modal}
          text1="🥺🪄⏱️"
          text2="부적이 완성되어야 친구들의 응원 메시지를 확인할 수 있어요!"
        />
      ) : null}
    </>
  );
};

export default CheeringCharm;
