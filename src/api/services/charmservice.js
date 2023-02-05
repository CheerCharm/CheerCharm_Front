import { http } from "../http";

const CharmService = {
  getAllCharm: () => http.get("/charms/"),
  getCreatingCharm: () => http.get("/charms/creating/"),
  getCreatedCharm: () => http.get("/charms/created/"),
  getCharm: id => http.get(`/charms/${id}/`),
  createCharm: (title, user, content, total_cheer, image) =>
    http.post("/charms/", {
      title: title,
      user: user,
      content: content,
      total_cheer: total_cheer,
      image: image,
    }),
  deleteCharm: id => http.delete(`/charms/${id}/`),
  uploadImage: (id, file_front, file_back) =>
    http.post(`/charms/${id}/upload/`, file_front, {
      headers: {
        "content-type": "multipart/form-data",
      },
    }),
};

export default CharmService;
