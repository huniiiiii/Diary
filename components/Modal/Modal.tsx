import React, { useState } from 'react';
import styles from './Modal.module.css'; // 모달에 대한 스타일 정의

const Modal = ({ show, onClose, onSave }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <DiaryEntryForm onSave={onSave} />
      </div>
    </div>
  );
};

const DiaryEntryForm = ({ onSave }) => {
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSave(content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="다이어리 내용을 입력하세요"
      />
      <button type="submit" className={styles.submitButton}>
        저장
      </button>
    </form>
  );
};

export default Modal;
