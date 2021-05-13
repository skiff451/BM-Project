import { useEffect, useState } from "react";
import Button from "../Button";
import formStyles from "./contactModalStyles";
import styles from "./ContactForm.module.scss";
import MailConfirm from "./MailConfirm";

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

  const [mailConfirm, setMailConfirm] = useState(false);
  const [appear, setAppear] = useState(false);

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

  useEffect(() => {
    if (appear) {
      setTimeout(() => setAppear(false), 3000);
    }
  }, [appear]);

  function onFormSubmit() {
    const nameReg = /[А-Я]{4,20}/gi;
    const telReg = /^[+]\d{2}[(]{0,1}[0-9]{3}[)]{0,1}\d{7}$/gi;
    setInputErr({
      nameErr: !!name.search(nameReg),
      telErr: !!tel.search(telReg),
    });

    if (!name.search(nameReg) && !tel.search(telReg)) {
      fetch("/api/mailSender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
      }).then((res) => {
        setMailConfirm(res.ok);
        setAppear(true);
        setName("");
        setTel("");
        setEmail("");
        setComment("");
      });
    }
  }

  const {
    nameInputStyle,
    telInputStyle,
    inputStyle,
    titleStyle,
    subTitleStyle,
    restrictionStyle,
    wrapperStyle,
  } = formStyles(version, centerPos, inputErr);

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
            className={inputStyle}
            type="email"
            placeholder="Введите e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <textarea
          className={inputStyle}
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
        {appear && <MailConfirm confirm={mailConfirm} />}
      </div>
    </div>
  );
}
