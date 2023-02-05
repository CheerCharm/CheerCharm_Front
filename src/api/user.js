import { useNavigate } from "react-router-dom";
import { http } from "./http";

// 회원가입 (POST)
export const RequestSignin = async (id, pw, nickname) => {
  const userData = {
    username: id,
    password: pw,
    nickname: nickname,
  };
  try {
    const response = await http.post(`/accounts/signup/`, userData);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 카카오 로그인 (GET)
export const KaKaoLogin = async code => {
  try {
    const response = await http.get(
      `/accounts/kakao/login/?code=${code}&redirect_uri=https://cheer-charm.vercel.app/oauth`,
    );
    const ACCESS_TOKEN = response.data.data.access_token;
    const REFRESH_TOKEN = response.data.data.refresh_token;

    localStorage.setItem("token", ACCESS_TOKEN);
    localStorage.setItem("refresh_token", REFRESH_TOKEN);

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 로그인 (POST)
export const RequestLogin = async (id, pw) => {
  const userData = {
    username: id,
    password: pw,
  };

  try {
    const response = await http.post(`/accounts/login/`, userData);

    localStorage.setItem("token", response.data.data.access_token);
    localStorage.setItem("refresh_token", response.data.data.refresh_token);

    window.location.replace("/");

    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 토큰 만료 & Refresh token (GET)
export const Refresh = async error => {
  if (
    error.response.data.detail === "Given token not valid for any token type"
  ) {
    const refresh = localStorage.getItem("refresh_token");
    try {
      const response = await http.post(`/accounts/token/refresh/`, {
        refresh: refresh,
      });
      localStorage.setItem("token", response.data.access);
      window.location.reload();
    } catch (error) {
      // test 미완
      alert("세션 만료. 다시 로그인해주세요.");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      window.location.replace("/auth/login");
    }
  }
};

// 로그아웃
export const RequestLogout = async () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("refresh_token");
  // window.location.href = `${serverURL}/accounts/login/`;
  window.location.replace("/");
};

// User 프로필 (GET) (id(hashed), nickname, password, username 반환)
export const RequestGetUser = async () => {
  const isLogout = !localStorage.getItem("token");
  if (isLogout) {
    return;
  } else {
    try {
      const response = await http.get(`/accounts/login/`);
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
      Refresh(error);
    }
  }
};
