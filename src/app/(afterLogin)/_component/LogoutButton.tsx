"use client"

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = { // 임시 정보
    id: 'misosiru',
    nickname: '미소시루',
    image: '/profile.jpg'
  }

  const onLogout = () => {};

  return (
    <button className={style.logoutButton} onClick={onLogout}>
      <div className={style.logoutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logoutUserName}>
        <div className={style.nickname}>{me.nickname}</div>
        <span className={style.userId}>@{me.id}</span>
      </div>
    </button>
  )
}