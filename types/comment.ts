export interface Comment {
  id: string;
  content: string;

  postId: string;

  authorId?: string | null;

  name?: string | null;
  email?: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface CreateCommentData {
  postId: string;
  content: string;

  name?: string;
  email?: string;
}