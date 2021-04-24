import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className={styles.substrate}>
      <div className={styles["contact-form"]}>
        <div className={styles["wrapper"]}>
          <span className={styles.title}>Нужна консультация?</span>
          <span className={styles.subtitle}>Оставьте свои данные и мы перезвоним</span>
          <input
            className={styles["long-input"]}
            type="text"
            placeholder="Введите имя *"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className={styles["input-block"]}>
            <input
              className={styles["short-input"]}
              type="tel"
              placeholder="Введите телефон *"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
            <input
              className={styles["short-input"]}
              type="email"
              placeholder="Введите e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <textarea
            className={styles["long-input"]}
            placeholder="Оставить комментарий"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <span className={styles.restriction}>
            *Поля отмеченные звездочкой являются обязательными к заполнению
          </span>
        </div>
      </div>
    </div>
  );
}
