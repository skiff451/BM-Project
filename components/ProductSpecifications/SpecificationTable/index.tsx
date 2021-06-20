import SpecificationTableCell from "./SpecificationTableCell";
import styles from "./SpecificationTable.module.scss";

interface SpecificationTableProps {
  tableData: string[][];
}

function SpecificationTable({ tableData }: SpecificationTableProps) {
  const cells = tableData.map((item, index) => {
    return <SpecificationTableCell key={index} cellData={item} />;
  });

  if (cells.length % 2 !== 0) {
    cells.push(
      <SpecificationTableCell key={cells.length} cellData={["", ""]} />
    );
  }

  const leftCells = cells.slice(0, cells.length / 2);
  const rightCells = cells.slice(cells.length / 2, cells.length + 1);

  return (
    <div className={styles.table}>
      <div className={styles.leftColumn}>{leftCells}</div>
      <div className={styles.rightColumn}>{rightCells}</div>
    </div>
  );
}

export default SpecificationTable;
