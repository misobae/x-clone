"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import style from './post.module.css';

type Props = {
  children: ReactNode,
  post: {
    postId: number;
    content: string,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    createdAt: Date,
    Images: string[],
  }
}

export default function PostArticle({ children, post}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  }

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}