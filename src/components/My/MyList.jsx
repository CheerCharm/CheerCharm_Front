import React, { useEffect, useState } from "react";
import * as S from "./My.style";
import Modal from "../common/Modal";
import { Galmuri } from "../../css/Font";
import { BiTrash } from "react-icons/bi";
import { testlist } from "../../_mock/data2";

import charm1 from "../../assets/images/Charm/mousecharm.png";
import charm2 from "../../assets/images/Charm/rabbitcharm.png";
import charm3 from "../../assets/images/Charm/squirrelcharm.png";
import charm4 from "../../assets/images/Charm/goatcharm.png";
import charm5 from "../../assets/images/Charm/monkeycharm.png";
import charm6 from "../../assets/images/Charm/birdcharm.png";

const MyList = ({ isDone }) => {
  let doneArr = [];
  let yetArr = [];
  for (let i = 0; i < testlist.length; i++) {
    if (testlist[i].cur_cheer === testlist[i].total_cheer) {
      doneArr.push(testlist[i]);
    } else {
      yetArr.push(testlist[i]);
    }
  }
  const [arr, setArr] = useState([]);
  useEffect(() => {
    if (isDone) {
      setArr(doneArr);
    } else {
      setArr(yetArr);
    }
    console.log(doneArr, yetArr);
  }, [isDone]);

  const findById = fId => {
    for (let i = 0; i < arr.length; i++) {
      if (fId === arr[i].id) return arr[i].title;
    }
  };
  const src = [charm1, charm2, charm3, charm4, charm5, charm6];
  const imgSrc = string => {
    if (string === "MOUSE") return charm1;
    else if (string === "RABBIT") return charm2;
    else if (string === "SQUIRREL") return charm3;
    else if (string === "GOAT") return charm4;
    else if (string === "MONKEY") return charm5;
    else if (string === "BIRD") return charm6;
  };
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const preDelete = cId => {
    setDeleteId(cId);
    openModal();
  };
  const onButton = () => {
    console.log(findById(deleteId), " 삭제하기");
    closeModal();
  };
  console.log(isModalOpen);
  return (
    <>
      {arr.length === 0 ? (
        isDone ? (
          <Galmuri size="15px" weight="400" color="#3a3a3a" margin="30px 0 0 0">
            아직 완성된 부적이 없네요!
          </Galmuri>
        ) : (
          <Galmuri size="15px" weight="400" color="#3a3a3a" margin="30px 0 0 0">
            아직 생성 중인 부적이 없네요!
          </Galmuri>
        )
      ) : (
        <>
          <S.FlexContainer>
            {arr &&
              arr.map(ch => {
                return (
                  <>
                    <S.CharmRect key={ch.id}>
                      {isEditing ? (
                        <S.TrashRect onClick={() => preDelete(ch.id)}>
                          <BiTrash fill="#155726" size="18" />
                        </S.TrashRect>
                      ) : null}
                      <S.CharmImg src={imgSrc(ch.image)} />
                      <Galmuri weight="400" size="12px" color="#4A4A4A">
                        {ch.title}
                      </Galmuri>
                    </S.CharmRect>
                  </>
                );
              })}
          </S.FlexContainer>
          <S.ButtonContainer>
            <S.DButton
              style={{ backgroundColor: isEditing ? "#F9D7CD" : "#ececec" }}
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              <Galmuri weight="400" size="14px">
                {isEditing ? "완료하기" : "삭제하기"}
              </Galmuri>
            </S.DButton>
          </S.ButtonContainer>
          {isModalOpen ? (
            <Modal
              isModalOpen={isModalOpen}
              closer={closeModal}
              maintext={`삭제한 부적은 복구할 수 없습니다. \n 정말 '${findById(
                deleteId,
              )}' 부적을 삭제하시겠습니까?`}
              buttontext="삭제하기"
              onClick={onButton}
              height="200px"
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default MyList;
