import styles from './DefaultStyle/DefaultStyle.module.css';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import React, { useEffect, useState } from "react";

const LogView = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/log")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
          console.log(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <Header></Header>
        <div className={styles.container}>
          <div className={styles.ul_head}>
            <p>ID</p>
            <p>Level</p>
            <p>Description</p>
            <p></p>
          </div>
          <ul className={styles.line}>
            {items.map(item => (
              <li key={item.id}>
                <p>{item.ID}</p>
                <p>{item.level}</p>
                <p>{item.description}</p>
                <p></p>
              </li>
            ))}
          </ul>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default LogView;

