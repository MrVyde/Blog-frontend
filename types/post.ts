import { Comment } from './comment';

export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;  // Required now

  author: {
    id: string;
    username: string;
  };

  comments: Comment[]; 
}