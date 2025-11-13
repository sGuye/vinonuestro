import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/card";
import styles from "./forYou.module.css";

function ForYou() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate("/detail");
  };

  return (
    <div className={styles.forYou}>
      <h2 className={styles.forYouTitle}>Selección perfecta para vos:</h2>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ForYou;
