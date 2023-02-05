import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./CreateCharm.style";
import Background from "../common/Background";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import blueback from "../../assets/images/bluegradient.svg";
import CustomizedSlider from "./Range.tsx";
import ImageSelect from "./ImageSelect";
import { PinkButton } from "../common/PinkButton.style";
import { CreateCharmA } from "../../api/charm";
import { RequestGetUser } from "../../api/user";
import CharmImage from "../CharmImage/CharmImage";
import { Galmuri } from "../../css/Font";

const CreateCharm = () => {
  const nav = useNavigate();
  // 부적 이미지 생성중
  const [wait, setWait] = useState(false);
  // charm id
  const [charmId, setCharmId] = useState();
  // 부적 이미지 업로드
  const [upload, setUpload] = useState(false);

  const [user, setUser] = useState();
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [num, setNum] = useState(5);
  const [design, setDesign] = useState("");
  useEffect(() => {
    setTitle("");
    setContent("");
    setNum(5);
    setDesign("");
    RequestGetUser().then(res => {
      if (res) {
        setUser(res.data.data.id);
        setNickname(res.data.data.nickname);
      }
    });
  }, []);
  const onChangeTitleInput = useCallback(
    e => {
      setTitle(e.target.value);
    },
    [title],
  );
  const onChangeContentInput = useCallback(
    e => {
      setContent(e.target.value);
    },
    [content],
  );
  const onChangeNumInput = (e, value) => {
    setNum(value);
  };
  useEffect(() => {});
  const onPost = () => {
    if (title === "" && content === "" && design === "")
      alert("부적의 이름, 소개를 입력하고 배경 디자인을 선택해주세요.");
    else if (title === "" && content === "")
      alert("부적의 이름, 소개를 입력해주세요.");
    else if (design === "" && content === "")
      alert("부적의 소개를 입력하고 배경 디자인을 선택해주세요.");
    else if (title === "" && design === "")
      alert("부적의 이름을 입력하고 배경 디자인을 선택해주세요.");
    else if (title === "") alert("부적의 이름을 입력해주세요.");
    else if (content === "") alert("부적의 소개를 입력해주세요.");
    else if (design === "") alert("부적 배경 디자인을 선택해주세요.");
    else {
      CreateCharmA(title, user, content, num, "RABBIT")
        .then(res => {
          setCharmId(res.data.data.id);
          setWait(true);
        })
        .catch();
    }
  };
  // 미리보기 모달이 열리면 업로드 전송 후 대기했다가 모달 끄고 공유 페이지로 이동
  useEffect(() => {
    if (wait) {
      setUpload(true);
      setTimeout(() => {
        setWait(false);
        nav(`/${user}/charm_id/${charmId}`);
      }, 4000);
    }
  }, [wait]);
  return (
    <>
      <Background>
        <Header type="login" />
        <S.TopRect>
          <S.TopImg src={blueback} />
          <S.TopText>{nickname}님의 소망을 가득 담아</S.TopText>
        </S.TopRect>
        <S.QuesRect>
          <S.Ques>부적의 이름은 무엇인가요?</S.Ques>
          <S.Ques1>생성될 부적의 앞면에 들어갈 제목이에요.</S.Ques1>
        </S.QuesRect>
        <S.TitleInput
          type="text"
          maxLength={12}
          onChange={onChangeTitleInput}
          autoComplete="off"
          placeholder="최대 12글자 이하"
        />
        <S.QuesRect style={{ paddingTop: "10px" }}>
          <S.Ques>부적의 소개를 적어주세요.</S.Ques>
          <S.Ques1>
            부적에 응원을 남기러 온 친구들이 보게 될 내용이에요.
          </S.Ques1>
        </S.QuesRect>
        <S.ContentInput
          maxLength={100}
          onChange={onChangeContentInput}
          autoComplete="off"
          placeholder="최대 100글자 이하"
        />
        <S.QuesRect>
          <S.Ques>몇 명의 응원을 받고 싶나요?</S.Ques>
          <S.Ques1>응원이 다 차기 전까지는 완성된 부적을 볼 수 없어요.</S.Ques1>
        </S.QuesRect>
        <S.RangeRect>
          <CustomizedSlider value={num} onChange={onChangeNumInput} />
        </S.RangeRect>
        <S.QuesRect style={{ paddingTop: "10px" }}>
          <S.Ques>원하는 부적 배경 디자인을 선택해주세요.</S.Ques>
          <S.Ques1>다음 이미지들은 부적의 이름이 적용된 예시예요.</S.Ques1>
        </S.QuesRect>
        <S.ImageContainer>
          <ImageSelect setDesign={setDesign} />
        </S.ImageContainer>
        <PinkButton
          width="165px"
          height="50px"
          size="15px"
          style={{ margin: "40px" }}
          onClick={() => {
            onPost();
          }}
        >
          부적 생성 시작!
        </PinkButton>
        <Footer />
      </Background>
      {wait && (
        <CharmImage title={title} id={charmId} upload={upload} num={design} />
      )}
    </>
  );
};

export default React.memo(CreateCharm);
