import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./SendCheer.style";
import Header from "../common/header/Header";
import { Galmuri } from "../../css/Font";
import { PinkButton } from "../common/PinkButton.style";
import Modal from "../common/modal/Modal";
import Background from "../common/Background";
import { GetCharm } from "../../api/charm";
import { SendCheer } from "../../api/cheer";
import Footer from "../common/footer/Footer";
import { RequestGetUser } from "../../api/user";

const SendCheerMenu = () => {
  const navigate = useNavigate();

  // Header 상태를 토큰값에 따라 변경
  // const isLogin = !!localStorage.getItem("token");

  // 닉네임 (받는사람)
  const [nickname, setNickname] = useState("");
  // 부적 제목
  const [title, setTitle] = useState("");
  // 부적 내용
  const [content, setContent] = useState("");

  // 응원 전송하고자 하는 id -> params
  const params = useParams();
  const id = params.charm_id;
  const user = params.user;

  // 응원 내용과 응원하는 사람의 닉네임
  const [cheerContent, setCheerContent] = useState("");
  const [cheerName, setCheerName] = useState("");

  // 변경하지 않는 값 불러오기
  useEffect(() => {
    // 여기서 request를 할 수가 없지... GetCharm에서 할 수 있도록 해야함.
    RequestGetUser().then(response => {
      if (response) setNickname(response.data.data.nickname);
    });
    GetCharm(id).then(response => {
      setContent(response.data.data.content);
      setTitle(response.data.data.title);
      setNickname(response.data.data.nickname);
    });
  }, []);

  // 모달 관리
  const [isModal, setIsModal] = useState(false);
  const onCloseModal = () => {
    setIsModal(false);
  };

  // 모달 ID에 따른 textlist 관리
  const [modalId, setModalId] = useState(0);

  const textlist = {
    0: {
      maintext: `응원을 남겼습니다!\n${nickname}님의 부적을 구경하러 가볼까요?`,
      buttontext: "확인",
    },
    1: {
      maintext: "응원 내용을 입력해주세요.",
      buttontext: "확인",
    },
    2: {
      maintext: "친구에게 알릴 이름을 입력해주세요.",
      buttontext: "확인",
    },
    3: {
      maintext: "이름은 12글자 이하로 설정해주세요.",
      buttontext: "확인",
    },
  };

  // 모달 속 버튼 클릭했을 때 (정상 제출 || 부족한 경우 )
  const onClickModalButton = () => {
    if (modalId === 0) {
      navigate(`/${user}/charm_id/${id}`);
    }
    setIsModal(false);
  };

  // 응원 전송 함수 (정상 제출 || 부족한 경우)
  const onSubmitCheering = () => {
    if (cheerContent === "") {
      setModalId(1);
    } else if (cheerName === "") {
      setModalId(2);
    } else if (cheerName.length > 12) {
      setModalId(3);
    } else {
      setModalId(0);
      // 이곳에서 request 예정
      SendCheer(id, cheerName, cheerContent)
        .then()
        .catch(error => {
          //console.log(error);
          alert(
            "이미 응원이 채워진 부적입니다!\n친구의 부적을 구경하러 갈까요?",
          );
          navigate(`/${user}/charm_id/${id}`);
        });
      setCheerContent("");
      setCheerName("");
    }
    setIsModal(true);
  };
  return (
    <>
      <Background>
        <Header />
        <S.TitleText direction={nickname.length > 4 ? "column" : "row"}>
          <Galmuri size="18px">{nickname} 님</Galmuri>
          <S.exNameText>
            <Galmuri size="18px" margin="0px 8px 0px 0px">
              의 성공을
            </Galmuri>
            <Galmuri size="24px" weight="800">
              응원
            </Galmuri>
            <Galmuri size="18px">해주세요!</Galmuri>
          </S.exNameText>
        </S.TitleText>
        <S.Line />
        <S.ContentTitle>
          <Galmuri size="20px" weight="600">
            {title}
          </Galmuri>
        </S.ContentTitle>
        <S.ContentText>
          <Galmuri size="12px">
            {content &&
              (content.includes("\n") ? (
                <>
                  {content.split("\n").map(line => {
                    return (
                      <span key={line + Math.floor(Math.random() * 10)}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </>
              ) : (
                <>
                  <span>{content}</span>
                </>
              ))}
          </Galmuri>
        </S.ContentText>
        <S.CheerText
          placeholder="응원을 남겨주세요"
          type="text"
          value={cheerContent}
          onChange={e => {
            setCheerContent(e.target.value);
          }}
        />
        <S.CheerName
          placeholder="전달할 이름을 남겨주세요 (12글자이하)"
          type="text"
          value={cheerName}
          onChange={e => setCheerName(e.target.value)}
        ></S.CheerName>
        <PinkButton
          width="150px"
          height="40px"
          margin="0 0 30px 0"
          onClick={onSubmitCheering}
        >
          응원 보내기
        </PinkButton>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Background>
      {isModal ? (
        <Modal
          isModalOpen={true}
          closer={onCloseModal}
          maintext={textlist[modalId].maintext}
          buttontext={textlist[modalId].buttontext}
          padding="0 20px 0 20px"
          size="13px"
          onClick={onClickModalButton}
        />
      ) : null}
    </>
  );
};

export default SendCheerMenu;
