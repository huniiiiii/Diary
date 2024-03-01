import React from 'react';
import styles from './CustomToolbar.module.css';

const CustomToolbar = ({ date, onNavigate }) => {
  const goToBack = () => {
    onNavigate('PREV');
  };

  const goToNext = () => {
    onNavigate('NEXT');
  };

  const goToCurrent = () => {
    onNavigate('TODAY');
  };

  const currentMonth = date
    .toLocaleString('en-US', { month: 'long' })
    .toUpperCase();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.toolbarcontainer}>
      <div className={styles.year}>{currentYear}</div>
      <div className={styles.monthRow}>
        <button onClick={goToBack} className={styles.toolbarbutton}>
          {'<'}
        </button>
        <span className={styles.month} onClick={goToCurrent}>
          {currentMonth}
        </span>
        <button onClick={goToNext} className={styles.toolbarbutton}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
