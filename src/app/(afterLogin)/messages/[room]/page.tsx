import Link from "next/link";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from "dayjs/plugin/relativeTime";
import cx from 'classnames'

import style from './chatRoom.module.css';
import BackButton from "@/app/(afterLogin)/_component/BackButton";

dayjs.extend(relativeTime);

export default function ChatRoom() {
  const user = {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: faker.image.avatar(),
  }
  const messages = [
    {messageId: 1, roomId: 123, id: 'misosiru',  content: 'Drop some money', createdAt: new Date()},
    {messageId: 2, roomId: 123, id: 'elonmusk', content: 'okay', createdAt: new Date()},
  ]

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div><h2>{user.nickname}</h2></div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div><b>{user.nickname}</b></div>
        <div>@{user.id}</div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === 'misosiru') { // 내 메시지면
            return (
              <div
                key={m.messageId}
                className={cx(style.message, style.myMessage)}>
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>{dayjs(m.createdAt).format('MMM DD, YYYY h:mm A')}</div>
              </div>
            );
          }
          return (
            <div
              key={m.messageId}
              className={cx(style.message, style.yourMessage)}>
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>{dayjs(m.createdAt).format('MMM DD, YYYY h:mm A')}</div>
            </div>
          );
        })}
      </div>
    </main>
  )
}