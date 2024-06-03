import styles from '@/app/(beforeLogin)/_component/main.module.css';
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'X. 무슨 일이 일어나고 있나요?',
}

export default function Layout({
  modal,
  children,
}: {
  modal: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  )
}