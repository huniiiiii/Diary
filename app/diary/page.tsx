'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <div>
      {isLoggedIn ? (
        <div>
          <h2>다이어리 페이지</h2>
          <p>{userId}님 안녕하세요!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
}

export default Diary;
