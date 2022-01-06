import React from "react";
import TableRow from "../../../OpenApiCommon/TableRow/TableRow";
import MobileTable from "../MobileTable/MobileTable";
import Table1 from "../Table1/Table1";
import styles from "./table.module.scss";
import { table1, table2, table3, table4 } from "./tableData";

const Table = () => {
	const table1_bg = "linear-gradient(90.08deg, #00C0B4 0.1%, #29C9F3 99.97%)";
	const table2_bg = "linear-gradient(109.76deg, #316EFF 0%, #D4008C 98.13%)";
	const row = {
		first: "FUNCTION",
		second: "QUOTA / MONTH",
		third: "SETUP FEES*",
		fourth: "MONTHLY PRICE**",
		border: false,
	};
	return (
		<div className={styles.table}>
			<div className={styles.forDesktop}>
				<div className={styles.tableHeader}>
					<div className={styles.left}>MODULE</div>
					<div className={styles.right}>
						<TableRow item={row} />
					</div>
				</div>
				<Table1 data={{ ...table1, bgColor: table1_bg }} />
				<Table1 data={{ ...table2, bgColor: table2_bg }} />
				<Table1 data={{ ...table3, bgColor: table1_bg }} />
				<Table1 data={{ ...table4, bgColor: table2_bg }} />
			</div>
			<div className={styles.forMobile}>
				<MobileTable data={{ ...table1, bgColor: table1_bg }} />
				<MobileTable data={{ ...table2, bgColor: table2_bg }} />
				<MobileTable data={{ ...table3, bgColor: table1_bg }} />
				<MobileTable data={{ ...table4, bgColor: table2_bg }} />
			</div>
		</div>
	);
};

export default Table;
