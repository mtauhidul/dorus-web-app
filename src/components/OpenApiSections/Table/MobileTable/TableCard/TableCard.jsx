import React from "react";
import styles from "./TableCard.module.scss";

const TableCard = ({ item }) => {
	return (
		<div style={{borderColor: item?.border ? "#fff" : "transparent"}} className={styles.TableCard}>
			<div className={styles.item}>
				<div className={styles.itemName}>FUNCTION</div>
				<div className={styles.itemValue}>{item.first}</div>
			</div>
			<div className={styles.item}>
				<div className={styles.itemName}>QUOTA / MONTH</div>
				<div className={styles.itemValue}>{item.second}</div>
			</div>
			<div className={styles.item}>
				<div className={styles.itemName}>SETUP FEES*</div>
				<div className={styles.itemValue}>{item.third}</div>
			</div>
			<div className={styles.item}>
				<div className={styles.itemName}>MONTHLY PRICE**</div>
				<div className={styles.itemValue}>{item.fourth}</div>
			</div>
		</div>
	);
};

export default TableCard;
