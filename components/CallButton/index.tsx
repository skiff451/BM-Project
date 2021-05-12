import Link from "next/link";
import { useEffect, useRef } from "react";

import styles from "./CallButton.module.scss";

interface CallButtonProps {
  tel: string;
}

export default function CallButton({ tel }: CallButtonProps) {
  const callBtn = useRef<HTMLSpanElement>(null);

  function callBtnShaking() {
    if (callBtn?.current !== null) {
      callBtn.current.classList.toggle(`${styles.animation}`);
    }
  }

  useEffect(() => {

    const interval = setInterval(callBtnShaking, 5000)
    
    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <Link href={`tel:${tel}`}>
      <a>
        <span ref={callBtn} className={styles["phone-btn"]}>
          <img
            className={styles["phone-img"]}
            src="/assets/contacts-img/phone-btn.svg"
            alt="phone"
          />
        </span>
      </a>
    </Link>
  );
}
