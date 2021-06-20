import styles from "./SpecificationTableCell.module.scss";

interface SpecificationTableCellProps {
    cellData: string[];
    
}

function SpecificationTableCell({ cellData }: SpecificationTableCellProps) {
  return (
    <div className={styles.cell}>
      <span className={styles.definition}>{cellData[0]}</span>
      <span className={styles.delimiter}/>
      <span className={styles.value}>{cellData[1]}</span>
    </div>
  );
}

export default SpecificationTableCell;
