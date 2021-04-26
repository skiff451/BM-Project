import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  children: string;
  responsive?: boolean;
  onClick: () => MouseEventHandler<HTMLButtonElement> | undefined;
}
export default function Button({ children, responsive ,onClick }: ButtonProps) {
 
  const btnStyles = classNames(styles.btn, {
    [styles.responsive]: responsive,
    [styles.static]: !responsive
  });

  
 
  return (
    <button className={btnStyles} onClick={onClick()}>
      {children}
    </button>
  );
}
