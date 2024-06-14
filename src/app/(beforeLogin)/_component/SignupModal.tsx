"use client";

import { useFormState, useFormStatus } from 'react-dom';
import Image from "next/image";
import onSubmit from "../_lib/signup";
import style from './modal.module.css';
import Logo from "../../../../public/logo.png";
import BackButton from "./BackButton";

function showMessage(message: string | null | undefined) {
  if (message === 'no_id') {
    return '아이디를 입력하세요.';
  }
  if (message === 'no_name') {
    return '닉네임을 입력하세요.';
  }
  if (message === 'no_password') {
    return '비밀번호를 입력하세요.';
  }
  if (message === 'no_image') {
    return '이미지를 업로드하세요.';
  }
  if (message === 'user_exists') {
    return '이미 사용 중인 아이디입니다.';
  }
  return '';
}
const initialState: {
  message: string | null;
} = {
  message: null,
};
export default function SignupModal() {
  const [state, formAction] = useFormState(onSubmit, initialState);
  const { pending } = useFormStatus();

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <Image className={style.logo} src={Logo} alt="logo" width="32" />
          </div>
          <div className={style.modalLayout}>
            <h1 className={style.title}>계정을 생성하세요</h1>
            <form action={formAction}>
              <div className={style.modalBody}>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="id">아이디</label>
                  <input id="id" name="id" className={style.input} type="text" placeholder=""
                  required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="name">닉네임</label>
                  <input id="name" name="name" className={style.input} type="text" placeholder=""
                  required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                  <input id="password" name="password" className={style.input} type="password" placeholder="" autoComplete="off" 
                  required
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel} htmlFor="image">프로필</label>
                  <input id="image" name="image" className={style.input} type="file" accept="image/*"
                  required
                  />
                </div>
              </div>
              {/* input에 required가 있어 압력 필드가 채워지지 않으면 button은 알아서 작동을 안한다 */}
              <button type="submit" className={style.actionButton} disabled={pending}>가입하기</button>
              <div className={style.error}>{showMessage(state?.message)}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}