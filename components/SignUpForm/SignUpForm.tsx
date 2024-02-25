'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Input/Input'; // Input 컴포넌트의 경로를 확인하고 필요에 따라 수정하세요.
import styles from './SignUpForm.module.css'; // CSS 모듈의 경로를 확인하고 필요에 따라 수정하세요.

function SignUpForm() {
  const methods = useForm();

  const onSubmit = data => {
    console.log('회원가입 데이터:', data);
    // 회원가입 로직을 구현하세요. 예: API 호출 등
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.signupform}
      >
        <Input
          name="email"
          type="text"
          placeholder="이메일"
          validation={{
            required: '이메일은 필수 입력 사항입니다.',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '유효하지 않은 이메일 형식입니다.',
            },
          }}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          validation={{
            required: '비밀번호는 필수 입력 사항입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
          }}
        />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          validation={{
            validate: value =>
              value === methods.watch('password') ||
              '비밀번호가 일치하지 않습니다.',
          }}
        />
        <button type="submit" className={styles.signupbutton}>
          회원가입
        </button>
      </form>
    </FormProvider>
  );
}

export default SignUpForm;
