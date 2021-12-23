import React from "react";
import arrow from "../../../../../resources/crm/arrow.svg";
import img from "../../../../../resources/crm/img3.svg";
import styles from "./Third.module.scss";

const Third = () => {
	return (
		<div className={styles.first}>
			<div className={styles.wrapper}>
				<h5>Customer Support</h5>
				<img src={img} alt="" />
				<img src={arrow} alt="" />
				<div className={styles.text1}>
					Quick support system is required to satisfy clients
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text2}>
					Ticket system with notifications to your support team to intervene on
					the right time
				</div>
				<img src={arrow} alt="" />
				<div className={styles.heading}>
					<h5>Tracking and tasks assign-ments</h5>
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text3}>
					Easy communication among different departments in order to increase
					efficiency
				</div>
				<img src={arrow} alt="" />
				<div className={styles.success}>
					<h5>Success</h5>
				</div>
			</div>
		</div>
	);
};

export default Third;
