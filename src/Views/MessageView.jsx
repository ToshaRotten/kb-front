import styles from './DefaultStyle/DefaultStyle.module.css';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import React, { useEffect, useState } from "react";

const MessageView = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/message")
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
            <p>Type</p>
            <p>Description</p>
          </div>
          <ul className={styles.line}>
            {items.map(item => (
              <li key={item.id}>
                <p>{item.ID}</p>
                <p>{item.type}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

export default MessageView;
