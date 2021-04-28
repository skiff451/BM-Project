import Link from "next/link";

import styles from "./CatalogButton.module.scss"

interface CatalogButtonProps {
  link: string;
  buttonName: string;
}

export default function CatalogButton({
  link,
  buttonName,
}: CatalogButtonProps) {
  return (
    <Link href={link}>
      <a>
        <button className={styles.button}>{buttonName}</button>
      </a>
    </Link>
  );
}
