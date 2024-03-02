import React from 'react';
import styles from './Modal.module.css'; // 모달에 대한 스타일 정의

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
