import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "../CheerList.style";
import cheer1 from "../../../assets/images/CharmPage/cheer1.svg";
import cheer2 from "../../../assets/images/CharmPage/cheer2.svg";
import cheer3 from "../../../assets/images/CharmPage/cheer3.svg";
import { Galmuri } from "../../../css/Font";
import { GetAllCheer } from "../../../api/cheer";

const CheeringList = ({ modal, setModal }) => {
  const params = useParams();
  const src = [cheer1, cheer2, cheer3];
  const [cheerlist, setCheerlist] = useState([]);
  useEffect(() => {
    GetAllCheer(params.charm_id)
      .then(res => {
        setCheerlist(res.data.data);
      })
      .catch();
  }, []);
  const fadeOut = () => {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 2500);
  };
  return (
    <>
      {cheerlist &&
        (cheerlist.length === 0 ? (
          <S.NoCheerContainer>
            <Galmuri size="15px" weight="400" color="#3a3a3a">
              아직 도착한 응원이 없네요!
            </Galmuri>
          </S.NoCheerContainer>
        ) : (
          <>
            {cheerlist &&
              cheerlist.map((ch, idx) => {
                return (
                  <S.CheerRect
                    key={ch.nickname + idx}
                    onClick={() => fadeOut()}
                  >
                    <S.CheerImg src={src[idx % 3]} />
                    <S.CheerText>{ch.nickname}</S.CheerText>
                  </S.CheerRect>
                );
              })}
          </>
        ))}
    </>
  );
};

export default React.memo(CheeringList);
