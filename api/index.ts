import { create } from "apisauce";

const api = create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

const getPhotos = (query: any) => {
  return api.get("/photos", { query: query, 
    client_id: 
    per_page: 10, page: 1 });
};
