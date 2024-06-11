import style from './message.module.css';
import Room from "./_component/Room";

export default function Messages() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>Messages</h3>
      </div>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
      <Room/>
    </main>
  )
}