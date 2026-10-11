import React from "react";
import styles from "./ErrorComponent.module.css";

const ErrorComponent = () => {
  return (
    <div className={styles.content}>
      <h2>
        Ошибка получения прогноза
        <br />
      </h2>
    </div>
  );
};

export default ErrorComponent;
