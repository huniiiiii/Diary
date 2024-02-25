'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './Input.module.css';

interface InputProps {
  name: string;
  type: 'text' | 'password';
  placeholder?: string;
  error?: object;
  validation?: object;
}

const Input = ({ name, type, placeholder, validation }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const isError = Boolean(errors[name]);

  const [inputType, setInputType] = React.useState(type);
  const toggleVisibility = () =>
    setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));

  return (
    <div className={styles.inputwrapper}>
      <div
        className={`${styles.inputcontainer} ${isError ? styles.error : ''}`}
      >
        <input
          type={inputType}
          placeholder={placeholder}
          {...register(name, validation)}
          className={styles.inputfield}
        />
        {type === 'password' && (
          <button
            onClick={toggleVisibility}
            className={styles.passwordtoggle}
            type="button"
          >
            <img
              src={
                inputType === 'password'
                  ? '/assets/eye-off.svg'
                  : '/assets/eye-on.svg'
              }
              alt="Toggle Password Visibility"
            />
          </button>
        )}
      </div>
      {errors[name] && (
        <p className={styles.errormessage}>{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Input;
