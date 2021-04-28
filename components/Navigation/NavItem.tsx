import Link from "next/link";

import styles from "./NavItem.module.scss";

interface NavItemProps {
  name: string;
  path: string;
}

export default function NavItem(props: NavItemProps) {
  const { name, path } = props;

  return (
    <>
      <Link href={path}>
        <a className={styles["nav-item"]}>{name}</a>
      </Link>
    </>
  );
}
