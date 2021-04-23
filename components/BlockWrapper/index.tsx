import styles from "./BlockWrapper.module.scss";

interface BlockWrapperProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export default function BlockWrapper({ title, children }: BlockWrapperProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
}
