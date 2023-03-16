import { create } from "apisauce";
import { API_URL, API_KEY } from "@env";
const api = create({
  baseURL: API_URL,
});

export const getPhotos = (query: string , perPage = 5) => {
  return api.get("/search/photos", {
    query: query,
    client_id: API_KEY,
    per_page: perPage,
  });
};
