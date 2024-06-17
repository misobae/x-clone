"use client"

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();
  
  const onLogout = () => {
    signOut({ redirect: false })
      .then(() => {
        router.replace('/');
      })
  };

  if (!me?.user) {
    return null;
  }
  console.log(me?.user);
  return (
    <button className={style.logoutButton} onClick={onLogout}>
      <div className={style.logoutUserImage}>
        <img src={me.user.image!} alt={me.user.id} />
      </div>
      <div className={style.logoutUserName}>
        <div className={style.nickname}>{me.user.name}</div>
        <span className={style.userId}>@{me.user.id}</span>
      </div>
    </button>
  )
}