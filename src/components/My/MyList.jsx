import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./My.style";
import Modal from "../common/modal/Modal";
import { Galmuri } from "../../css/Font";
import { BiTrash } from "react-icons/bi";
import {
  GetCreatingCharm,
  GetCreatedCharm,
  DeleteCharm,
} from "../../api/charm";
import { RequestGetUser } from "../../api/user";

const MyList = ({ isDone }) => {
  const nav = useNavigate();
  const [doneArr, setDoneArr] = useState([]);
  const [creatingArr, setCreatingArr] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const getArrays = () => {
    GetCreatingCharm().then(res => {
      setCreatingArr(res.data.data);
    });
    GetCreatedCharm().then(res => {
      setDoneArr(res.data.data);
    });
  };
  useEffect(() => {
    RequestGetUser().then(res => {
      if (res) setCurrentUser(res.data.data.id);
    });
    getArrays();
  }, []);
  const findById = fId => {
    if (isDone) {
      for (let i = 0; i < doneArr.length; i++) {
        if (fId === doneArr[i].id) return doneArr[i].title;
      }
    } else {
      for (let i = 0; i < creatingArr.length; i++) {
        if (fId === creatingArr[i].id) return creatingArr[i].title;
      }
    }
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
    DeleteCharm(deleteId)
      .then(res => {
        getArrays();
      })
      .catch(err => {
        console.log(err);
      });
    closeModal();
  };
  return (
    <>
      {isDone ? (
        doneArr.length === 0 ? (
          <Galmuri size="15px" weight="400" color="#3a3a3a" margin="30px 0 0 0">
            아직 완성된 부적이 없네요!
          </Galmuri>
        ) : (
          <>
            <S.FlexContainer>
              {doneArr &&
                doneArr.map(ch => {
                  return (
                    <S.CharmRect key={ch.id + ch.title}>
                      {isEditing ? (
                        <S.TrashRect onClick={() => preDelete(ch.id)}>
                          <BiTrash fill="#155726" size="18" />
                        </S.TrashRect>
                      ) : null}
                      <S.CharmImg
                        src={ch.charm_image[0].img_front}
                        onClick={() => nav(`/${currentUser}/charm_id/${ch.id}`)}
                      />
                      <Galmuri weight="400" size="12px" color="#4A4A4A">
                        {ch.title}
                      </Galmuri>
                    </S.CharmRect>
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
          </>
        )
      ) : creatingArr.length === 0 ? (
        <Galmuri size="15px" weight="400" color="#3a3a3a" margin="30px 0 0 0">
          아직 생성 중인 부적이 없네요!
        </Galmuri>
      ) : (
        <>
          <S.FlexContainer>
            {creatingArr &&
              creatingArr.map(ch => {
                return (
                  <S.CharmRect key={ch.id + ch.title}>
                    {isEditing ? (
                      <S.TrashRect onClick={() => preDelete(ch.id)}>
                        <BiTrash fill="#155726" size="18" />
                      </S.TrashRect>
                    ) : null}
                    {ch.charm_image && (
                      <S.CharmImg
                        src={ch.charm_image[0].img_front}
                        onClick={() => nav(`/${currentUser}/charm_id/${ch.id}`)}
                      />
                    )}
                    <Galmuri weight="400" size="12px" color="#4A4A4A">
                      {ch.title}
                    </Galmuri>
                  </S.CharmRect>
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
        </>
      )}
      {isModalOpen ? (
        <Modal
          isModalOpen={isModalOpen}
          closer={closeModal}
          maintext={`삭제한 부적은 복구할 수 없습니다. \n 정말 '${findById(
            deleteId,
          )}' 부적을 삭제하시겠습니까?`}
          buttontext="삭제하기"
          onClick={onButton}
          height="210px"
        />
      ) : null}
    </>
  );
};

export default MyList;
