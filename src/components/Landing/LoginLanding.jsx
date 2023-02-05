import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import Background from "../common/Background";
import { Space } from "./Logout.style";
import NoCharm from "./NoCharm";
import YesCharm from "./YesCharm";
import { GetCreatingCharm } from "../../api/charm";

const LoginLanding = () => {
  // 부적 리스트를 api를 통해 받아오고, (아마 useEffect/useMemo 사용)
  // 리스트 내부의 값이 없는 경우 / 있는 경우로 나누어서 return
  // 위의 내용은 각각 NoCharm, YesCharm이라는 별도의 컴포넌트를 데려오는 방식으로 적용

  const [isCharm, setIsCharm] = useState();
  const [creatingLength, setCreatingLength] = useState(0);

  useEffect(() => {
    GetCreatingCharm().then(response => {
      setCreatingLength(response.data.data.length);
    });
  }, []);

  useEffect(() => {
    creatingLength === 0 ? setIsCharm(false) : setIsCharm(true);
  }, [creatingLength]);

  return (
    <>
      <Background>
        <Header type="login" />
        {isCharm && isCharm ? <YesCharm /> : <NoCharm />}
        <Space></Space>
      </Background>
    </>
  );
};

export default LoginLanding;
