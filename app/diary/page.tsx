'use client';
import React, { useState } from 'react';

function Diary() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div>
        <h2>메인 페이지</h2>
        <p>로그인 성공!</p>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
}

export default Diary;
