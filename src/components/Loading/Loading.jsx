import { useState, useEffect } from 'react';
import styles from './Loading.module.css';

export default function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 0-100% in 1500ms
    const duration = 2000;
    const intervalTime = 15; 
    const totalTicks = duration / intervalTime;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      const newProgress = Math.min(Math.round((currentTick / totalTicks) * 100), 100);
      setProgress(newProgress);
      
      if (currentTick >= totalTicks) {
        clearInterval(timer);
        // Wait 300ms at 100% before removing the loading screen
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <span className={styles.logoBracket}>&lt;</span>LTRH<span className={styles.logoBracket}> /&gt;</span>
      </div>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span className={styles.percentage}>{progress}%</span>
        </div>
        <div className={styles.progressBarWrapper}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
