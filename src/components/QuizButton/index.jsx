import React from "react";
import styles from './quizButton.module.css'
import Link from 'next/link';

const QuizButton = () => {
  return (
    <div className={styles.QuizButton}>
      <Link href="/thank">
        <span className={styles.link}>Encuesta</span>
      </Link>
    </div>
  );
};

export default QuizButton;