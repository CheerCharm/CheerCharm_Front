import React, { useEffect, useState } from "react";
import SendCheerMenu from "../components/SendCheer/SendCheerMenu";
import { useNavigate, useParams } from "react-router-dom";
import { GetCharm } from "../api/charm";
import CheeredCharm from "../components/CheerCharm/cheered/CheeredCharm";

const Alert = () => {
  useEffect(() => {
    alert("이미 완성된 부적입니다.\n응원 결과를 확인하세요!");
  }, []);

  return (
    <>
      <CheeredCharm />
    </>
  );
};

const SendCheerPage = () => {
  const [isDone, setIsDone] = useState();
  const [curCheer, setCurCheer] = useState();

  const params = useParams();
  useEffect(() => {
    GetCharm(params.charm_id)
      .then(response => {
        setCurCheer(response.data.data.cur_cheer);
        if (response.data.data.total_cheer === response.data.data.cur_cheer)
          setIsDone(true);
        else setIsDone(false);
      })
      .catch();
  }, [curCheer]);

  return <>{isDone ? <Alert /> : <SendCheerMenu />}</>;
};

export default SendCheerPage;
