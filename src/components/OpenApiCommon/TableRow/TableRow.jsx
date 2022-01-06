import React from "react";
import styles from "./TableRow.module.scss";

const TableRow = ({ item }) => {
	return (
		<div
			style={{ borderColor: item?.border ? "#fff" : "transparent" }}
			className={styles.rowContainer}
		>
			<div className={styles.first}>{item?.first}</div>
			<div className={styles.second}>{item?.second}</div>
			<div className={styles.third}>{item?.third}</div>
			<div className={styles.fourth}>{item?.fourth}</div>
		</div>
	);
};

export default TableRow;
