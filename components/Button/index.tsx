import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick: () => MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button({ children, onClick }: ButtonProps) {
  return <button className={styles.btn} onClick={onClick()}>{children}</button>;
}
