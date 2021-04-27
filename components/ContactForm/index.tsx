import { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "../Button";
import styles from "./ContactForm.module.scss";

interface ContactFormProps {
  title: string;
  subtitle: string;
  version?: "dark" | "light";
  centerPos?: boolean;
  style: {
    form: string;
  };
}

export default function ContactForm({
  title,
  subtitle,
  version = "light",
  centerPos = true,
  style,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [inputErr, setInputErr] = useState({
    nameErr: false,
    telErr: false,
  });

  const [formInfo, setFormInfo] = useState({
    name: "",
    tel: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    setInputErr({
      nameErr: false,
      telErr: false,
    });
    setFormInfo({
      name,
      tel,
      email,
      comment,
    });
  }, [name, tel, email, comment]);

  function onFormSubmit() {
    const nameReg = /[А-Я]{4,20}/gi;
    const telReg = /^[+]\d{2}[(]{0,1}[0-9]{3}[)]{0,1}\d{7}$/gi;

    setInputErr({
      nameErr: !!name.search(nameReg),
      telErr: !!tel.search(telReg),
    });
  }

  const nameInputStyle = classNames(styles["long-input"], {
    [styles.error]: inputErr.nameErr,
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
    // [styles.center]: centerPos,
  });

  const telInputStyle = classNames(styles["short-input"], {
    [styles.error]: inputErr.telErr,
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
    // [styles.center]: centerPos,
  });

  const longInputStyle = classNames(styles["long-input"], {
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
    // [styles.center]: centerPos,
  });

  const shortInputStyle = classNames(styles["short-input"], {
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
    // [styles.center]: centerPos,
  });

  const titleStyle = classNames(styles.title, {
    [styles.light]: version === "light",
    [styles.dark]: version === "dark",
    [styles.center]: centerPos,
  });

  const subTitleStyle = classNames(styles.subtitle, {
    [styles.light]: version === "light",
    [styles.dark]: version === "dark",
    [styles.center]: centerPos,
  });

  const restrictionStyle = classNames(styles.restriction, {
    [styles.light]: version === "light",
    [styles.dark]: version === "dark",
  });

  const wrapperStyle = classNames(styles["wrapper"], {
    [styles.center]: centerPos,
  });

  return (
    <div className={style.form}>
      <div className={wrapperStyle}>
        <span className={titleStyle}>{title}</span>
        <span className={subTitleStyle}>{subtitle}</span>
        <input
          autoFocus={false}
          className={nameInputStyle}
          type="text"
          placeholder="Введите имя *"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className={styles["input-block"]}>
          <input
            className={telInputStyle}
            type="tel"
            placeholder="+38(099)1234567 *"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <input
            className={shortInputStyle}
            type="email"
            placeholder="Введите e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <textarea
          className={longInputStyle}
          placeholder="Оставить комментарий"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <span className={restrictionStyle}>
          *Поля отмеченные звездочкой являются обязательными к заполнению
        </span>
        <Button onClick={onFormSubmit}>Отправить</Button>
      </div>
    </div>
  );
}
