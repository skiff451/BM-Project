import Button from "../../../Button";
import styles from "./PromoContent.module.scss";

interface PromoContentProps {
  children: JSX.Element | JSX.Element[];
}

export default function PromoContent({ children }: PromoContentProps) {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
