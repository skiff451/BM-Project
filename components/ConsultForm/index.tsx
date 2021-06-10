import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "../ContactForm";
import styles from "./ConsultForm.module.scss";

interface IConsultFormProps {
  imgSrc: string;
}

export default function ConsultForm({ imgSrc }: IConsultFormProps) {
  const [isImgRender, setImgRender] = useState(true);

  function imgChecker() {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1111) {
        setImgRender(false);
      } else {
        setImgRender(true);
      }
    }
  }

  if (typeof window !== "undefined") {
    useEffect(() => {
      imgChecker();
    }, []);

    useEffect(() => {
      window.addEventListener(`resize`, imgChecker);
      return () => {
        removeEventListener(`resize`, imgChecker);
      };
    });
  }

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
        {isImgRender && (
          <Image src={imgSrc} alt="consultPicture" width={844} height={539} />
        )}
      </div>
    </div>
  );
}
