import { useEffect, useState } from "react";
import classNames from "classnames";
import Button from "../Button";
import styles from "./ContactForm.module.scss";

interface ContactFormProps {
  title: string;
  subtitle: string;
  style: {
    substrate: string;
    form: string;
  };
}

export default function ContactForm({
  title,
  subtitle,
  style,
}: ContactFormProps) {
  const [modal, setModal] = useState(true);

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

  useEffect(() => {}, [modal]);

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

  const nameErr = classNames(styles["long-input"], {
    [styles.error]: inputErr.nameErr,
  });

  const telErr = classNames(styles["short-input"], {
    [styles.error]: inputErr.telErr,
  });

  return modal ? (
    <div
      className={style.substrate}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className={style.form}>
        <div className={styles["wrapper"]}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
          <input
            autoFocus={false}
            className={nameErr}
            type="text"
            placeholder="Введите имя *"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className={styles["input-block"]}>
            <input
              className={telErr}
              type="tel"
              placeholder="+38(099)1234567 *"
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
          <Button onClick={() => onFormSubmit}>Отправить</Button>
        </div>
      </div>
    </div>
  ) : null;
}
