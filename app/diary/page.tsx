'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DiaryCalendar from '../../components/Calendar/DiaryCalendar';
import styles from './page.module.css';
import Link from 'next/link';

function Diary() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userId');
    router.push('/');
  };

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <div className={styles.diarycontainer}>
          <div className={styles.header}>
            <Link href="/">
              {' '}
              <img src="/assets/logo.svg" />
            </Link>
            <div className={styles.userinfo}>
              <p>{userId}님 안녕하세요🤗</p>
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          </div>
          <DiaryCalendar />
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
}

export default Diary;
