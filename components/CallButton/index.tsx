import Link from "next/link";

import styles from "./CallButton.module.scss"

interface CallButtonProps {
  tel: string;
}

export default function CallButton({ tel }: CallButtonProps) {
  return (
    <Link href={`tel:${tel}`}>
      <a className="">
        <span className={styles["phone-btn"]}>
          <img src="/assets/contacts-img/phone-btn.svg" alt="phone" />
        </span>
      </a>
    </Link>
  );
}
