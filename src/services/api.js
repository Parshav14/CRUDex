import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getItems = () => api.get("/items");
export const createItem = (item) => api.post("/items", item);
export const updateItem = (id, item) => api.put(`/items/${id}`, item);
export const deleteItem = (id) => api.delete(`/items/${id}`);
