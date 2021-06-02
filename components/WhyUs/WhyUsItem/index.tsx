import Image from "next/image";
import styles from "./WhyUs.module.scss";

interface WhyUsItemProps {
  text: string;
  imgName: string;
}

export default function WhyUsItem({ text, imgName }: WhyUsItemProps) {
  return (
    <div className={styles["why-us-item"]}>
      <span className={styles["img-wrapper"]}>
        <Image src={`/assets/why-us-img/${imgName}`} width={80} height={80} alt="advantage"/>
      </span>
      <p>{text}</p>
    </div>
  );
}
