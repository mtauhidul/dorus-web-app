import React from "react";
import TableRow from "../../../OpenApiCommon/TableRow/TableRow";
import styles from "./Table1.module.scss";

const Table1 = (props) => {
	const { row, title, bgColor } = props.data;
	return (
		<div style={{background: bgColor}} className={styles.Table1}>
			<div className={styles.left}>{title}</div>
			<div className={styles.right}>
				{row.map((item, index) => (
                    <TableRow item={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default Table1;
