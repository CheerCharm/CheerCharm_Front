import CharmService from "./services/charmservice";
import { Refresh, requestLogout } from "./user";

// 전체 부적 조회 (GET)
export const GetAllCharm = async () => {
  try {
    const response = await CharmService.getAllCharm();
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 현재 진행중인 부적 조회 (GET)
export const GetCreatingCharm = async () => {
  try {
    const response = await CharmService.getCreatingCharm();
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 완성된 부적 조회 (GET)
export const GetCreatedCharm = async () => {
  try {
    const response = await CharmService.getCreatedCharm();
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 개별 부적 조회(GET)
export const GetCharm = async id => {
  try {
    const response = await CharmService.getCharm(id);
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 부적 생성 (POST)
export const CreateCharmA = async (
  title,
  user,
  content,
  total_cheer,
  image,
) => {
  try {
    const response = await CharmService.createCharm(
      title,
      user,
      content,
      total_cheer,
      image,
    );
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 부적 삭제 (DELETE)
export const DeleteCharm = async id => {
  try {
    const response = await CharmService.deleteCharm(id);
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

export const UploadImage = async (id, file_front, file_back) => {
  try {
    const response = await CharmService.uploadImage(id, file_front, file_back);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
