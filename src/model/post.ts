import { User } from "./user";
import { PostImage } from "./postImage";

export interface Post {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[]
}