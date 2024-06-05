import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

import style from './post.module.css';
import ActionButtons from "./ActionButtons";

dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/elon.jpg',
    },
    content: 'Tesla will soon reach $1,000. Hold!',
    createdAt: new Date(),
    Images: [],
  }
  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname}/>
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              <span className={style.postUserId}>@{target.User.id}</span>
            </Link>
            <span className={style.postDate}>· {dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div  className={style.postContent}>{target.content}</div>
          <div className={style.postImageSection}>

          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  )
}