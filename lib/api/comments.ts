import { apiFetch } from "./client";

import {
  Comment,
  CreateCommentData,
} from "@/types/comment";

export const commentApi = {
  // get comments by post
  getCommentsByPost: (postId: string) =>
    apiFetch<Comment[]>(
      `/api/comments/post/${postId}`
    ),

    // get all comments
    getAllComments: () =>
    apiFetch<Comment[]>("/api/comments"),

  // create comment
  createComment: (
    data: CreateCommentData
  ) =>
    apiFetch<Comment>("/api/comments", {
      method: "POST",

      body: JSON.stringify(data),
    }),

  // update comment
  updateComment: (
    id: string,
    content: string,
    token: string
  ) =>
    apiFetch<Comment>(
      `/api/comments/${id}`,
      {
        method: "PUT",

        headers: {
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({ content }),
      }
    ),

  // delete comment
  deleteComment: (
    id: string,
    token: string
  ) =>
    apiFetch(`/api/comments/${id}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};