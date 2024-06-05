import style from './followRecommendSection.module.css';
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";

export default function FollowRecommendSection() {
  return (
    <div className={style.followRecommend}>
      <h3>Who to follow</h3>
      <FollowRecommend />
      <FollowRecommend />
      <FollowRecommend />
    </div>
  )
}