import React from "react";
import styles from "./MobileTable.module.scss";
import TableCard from "./TableCard/TableCard";

const MobileTable = ({ data }) => {
	console.log(data);
	return (
		<div style={{ background: data?.bgColor }} className={styles.wrapper}>
			<h3>{data?.title}</h3>
			{data?.row?.map((item, index) => (
				<TableCard key={item.first} item={item} />
			))}
		</div>
	);
};

export default MobileTable;
