import Image from "next/image";

import styles from "./mailConfirm.module.scss";

interface MailConfirmProps {
  confirm: boolean | undefined;
}

export default function MailConfirm({ confirm }: MailConfirmProps) {
  const accepted = (
    <div className={styles.box}>
      <Image src="/assets/confirm-popup/sucsses.svg" width={26} height={26} />
      <span className={styles.success}>
        Спасибо! Ваши данные успешно отправлены.
      </span>
    </div>
  );

  const failed = (
    <div className={styles.box}>
      <Image src="/assets/confirm-popup/failed.svg" width={26} height={26} />
      <span className={styles.failed}>
        Что-то пошло не так. Попробуйте еще раз{" "}
      </span>
    </div>
  );

  return confirm ? accepted : failed;
}
