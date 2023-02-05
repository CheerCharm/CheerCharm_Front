import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./CheeredCharm.style";
import CompleteCharm from "../../CompleteCharm/CompleteCharm";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import ProgressBar from "../../common/progressbar/ProgressBar";
import CheeredList from "./CheeredList";
import PopUp from "../PopUp";
import speechbubble from "../../../assets/images/CharmPage/speechbubble.svg";
import { NanoomSquare, Galmuri } from "../../../css/Font";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Background from "../../common/Background";
import { GetCharm } from "../../../api/charm";

const CheeredCharm = () => {
  const isLogin = !!localStorage.getItem("token");
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);

  // 부적 이미지 애니메이션 관리
  const [charmclick, setCharmclick] = useState(true);

  // 부적 이미지 관리
  const [charmFront, setCharmFront] = useState("");
  const [charmBack, setCharmBack] = useState("");

  const [currentCharm, setCurrentCharm] = useState({});
  const [total, setTotal] = useState(0);
  const [cur, setCur] = useState(0);
  useEffect(() => {
    GetCharm(params.charm_id)
      .then(res => {
        setCurrentCharm(res.data.data);
        setTotal(res.data.data.total_cheer);
        setCur(res.data.data.cur_cheer);
        setCharmFront(res.data.data.charm_image[0].img_front);
        setCharmBack(res.data.data.charm_image[0].img_back);
      })
      .catch();
  }, []);

  return (
    <>
      <Background>
        <Header type={isLogin ? "login" : "logout"} />
        <S.CharmContainer>
          <CompleteCharm
            click={charmclick}
            front={charmFront}
            back={charmBack}
          />
        </S.CharmContainer>
        <Galmuri size="18px" weight="700" color="#3A3A3A" margin="0 0 5px 0">
          {currentCharm.title}
        </Galmuri>
        <S.ButtonContainer>
          <S.ButtonRect onClick={e => setCharmclick(!charmclick)}>
            <MdOutlineFlipCameraAndroid size="12" />
            <NanoomSquare size="11px" weight="400">
              부적 뒷면 보기
            </NanoomSquare>
          </S.ButtonRect>
          <S.ButtonRect
            onClick={() =>
              charmclick ? window.open(charmFront) : window.open(charmBack)
            }
          >
            <FiDownload size="12" />
            <NanoomSquare size="11px" weight="400">
              부적 이미지 저장하기
            </NanoomSquare>
          </S.ButtonRect>
        </S.ButtonContainer>
        <ProgressBar total={total} done={cur} isRight={false} />
        <S.BubbleContainer>
          <S.BubbleImg src={speechbubble} />
          <div className="text1">친구들의 응원을 모아 부적 생성 완료!</div>
          <div className="text2">( ˘͈ ᵕ ˘͈♡)˚๐*˟</div>
        </S.BubbleContainer>
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
            <CheeredList
              modal={modal}
              setModal={setModal}
              popup={popup}
              setPopup={setPopup}
            />
          </div>
        </S.CheerContainer>
        <Footer />
      </Background>
      {popup ? (
        <PopUp
          isModalOpen={popup}
          text1="🤫🔒🚫"
          text2="도착한 응원은 부적을 만든 사람만 열어볼 수 있어요!"
        />
      ) : null}
    </>
  );
};

export default CheeredCharm;
