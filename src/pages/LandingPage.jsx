import React, { useState } from "react";
import LoginLanding from "../components/Landing/LoginLanding";
import LogoutLanding from "../components/Landing/LogoutLanding";
import Footer from "../components/common/footer/Footer";

const LandingPage = () => {
  // 토큰값으로 login 상태 받아오기

  const isLogin = !!localStorage.getItem("token");

  return (
    <>
      {isLogin ? <LoginLanding /> : <LogoutLanding />}
      <Footer />
    </>
  );
};

export default LandingPage;
