import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from './singlePost.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "./_component/CommentForm";

export default function SinglePost() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <BackButton/>
        <h3 className={style.headerTitle}>Post</h3>
      </div>
      <div className={style.emptyBox}></div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}