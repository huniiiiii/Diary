'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../Input/Input';
import axios from 'axios';
import styles from './SignUpForm.module.css';
import { useRouter } from 'next/navigation';

function SignUpForm() {
  const methods = useForm();
  const { handleSubmit, setError, ...rest } = useForm();
  const router = useRouter();

  const onSubmit = async data => {
    if (data.password !== data.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      const response = await axios.post('https://diary.es6.kr/auth/signup', {
        email: data.email,
        password: data.password,
      });
      console.log('회원가입 성공:', response.data);
      alert('회원가입이 성공적으로 완료되었습니다.');
      router.push('/');
    } catch (error) {
      if (
        error.response &&
        error.response.data.message === '중복된 아이디입니다.'
      ) {
        setError('email', {
          type: 'manual',
          message: '중복된 아이디입니다.',
        });
      } else {
        console.error(
          '회원가입 실패:',
          error.response ? error.response.data : error,
        );
        alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
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
