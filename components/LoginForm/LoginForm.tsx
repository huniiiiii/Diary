'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Input/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';

function LoginForm() {
  const methods = useForm();
  const router = useRouter();

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        'https://diary.es6.kr/auth/login',
        data,
      );
      console.log(response.data);
      localStorage.setItem('userId', data.email);
      router.push('/diary');
    } catch (error) {
      console.error(
        '로그인 실패:',
        error.response ? error.response.data : error,
      );
      alert('로그인 실패. 다시 시도해주세요.');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
        <button className={styles.loginbutton} type="submit">
          로그인
        </button>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
