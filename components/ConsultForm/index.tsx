import Image from "next/image";
import ContactForm from "../ContactForm";

import styles from "./ConsultForm.module.scss";

export default function ConsultForm() {
  return (
      <div className={styles.container}>
          <div className={styles.group}>
          <ContactForm
        title="Нужна консультация?"
          subtitle="Оставьте свои данные и мы перезвоним"
          version="dark"
          centerPos={false}
        style={{
          form: styles["contact-form"],
        }}
      />

      <Image
        src="/assets/consult-form-imgs/consult_1.png"
        alt="consult"
        width={844}
        height={539}
      />

          </div>
     
    </div>
  );
}
