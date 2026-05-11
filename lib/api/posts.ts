import { apiFetch } from "./client";
import { Post } from "@/types/post";

export const postApi = {
  getPosts: () =>
    apiFetch<Post[]>("/api/posts"),

  getPostById: (id: string) =>
    apiFetch<Post>(`/api/posts/${id}`),

  createPost: (
    data: Partial<Post>,
    token: string
  ) =>
    apiFetch<Post>("/api/posts", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    }),

  updatePost: (
    id: string,
    data: Partial<Post>,
    token: string
  ) =>
    apiFetch<Post>(`/api/posts/${id}`, {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    }),

  deletePost: (id: string, token: string) =>
    apiFetch(`/api/posts/${id}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};