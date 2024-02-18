'use client';

import React, { useState } from 'react';
import styles from './Input.module.css';
import { platform } from 'os';

interface InputProps {
  type: 'text' | 'password';
  onValidate?: (value: string) => boolean;
}

function Input({ type, onValidate, placeholder }: InputProps) {
  const [inputType, setInputType] = useState<string>(type);
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const toggleVisibility = () => {
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (!newValue) {
      setIsError(false);
    } else {
      const error = onValidate ? onValidate(newValue) : false;
      setIsError(error);
    }
  };

  return (
    <div className={styles.inputwrapper}>
      <div className={`${styles.inputcontainer} ${isError ? 'error' : ''}`}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.inputfield}
        />
        {type === 'password' && (
          <div onClick={toggleVisibility} className={styles.passwordtoggle}>
            <img
              src={
                inputType === 'password'
                  ? '/assets/eye-off.svg'
                  : '/assets/eye-on.svg'
              }
              alt="Toggle Password Visibility"
            />
          </div>
        )}
      </div>
      {value && isError && (
        <p className={styles.errormessage}>내용을 다시 작성해 주세요</p>
      )}
    </div>
  );
}

export default Input;
