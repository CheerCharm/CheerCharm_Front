import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "../CheerList.style";
import cheer1 from "../../../assets/images/CharmPage/cheer1.svg";
import cheer2 from "../../../assets/images/CharmPage/cheer2.svg";
import cheer3 from "../../../assets/images/CharmPage/cheer3.svg";
import CheerModal from "../CheerModal";
import { RequestGetUser } from "../../../api/user";
import { GetAllCheer } from "../../../api/cheer";

const CheeredList = ({ modal, setModal, popup, setPopup }) => {
  const params = useParams();
  const src = [cheer1, cheer2, cheer3];
  const [cheerlist, setCheerlist] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    GetAllCheer(params.charm_id)
      .then(res => {
        setCheerlist(res.data.data);
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

  const [from, setFrom] = useState("");
  const [text, setText] = useState("");
  const preOpen = (nickname, content) => {
    setFrom(nickname);
    setText(content);
    setModal(true);
  };
  const fadeOut = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2500);
  };
  return (
    <>
      {cheerlist && (
        <>
          {cheerlist &&
            cheerlist.map((ch, idx) => {
              return (
                <S.CheerRect
                  key={ch.id}
                  onClick={
                    isMine
                      ? () => preOpen(ch.nickname, ch.content)
                      : () => fadeOut()
                  }
                >
                  <S.CheerImg src={src[idx % 3]} />
                  <S.CheerText>{ch.nickname}</S.CheerText>
                </S.CheerRect>
              );
            })}
        </>
      )}
      {modal ? (
        <CheerModal
          isModalOpen={modal}
          closer={() => setModal(false)}
          from={from}
          text={text}
        />
      ) : null}
    </>
  );
};

export default React.memo(CheeredList);
