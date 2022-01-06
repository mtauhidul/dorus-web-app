import React from "react";
import arrow from "../../../../../resources/crm/arrow.svg";
import img from "../../../../../resources/crm/img.svg";
import styles from "./First.module.scss";

const First = () => {
	return (
		<div className={styles.first}>
			<div className={styles.wrapper}>
				<h5>Marketing</h5>
				<img src={img} alt="" />
				<img src={arrow} alt="" />
				<div className={styles.text1}>
					Set targets on the number of leads per month and assign it to
					marketing team
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text2}>
					Set budgets with marketing teams to start making campaigns and
					generate new leads
				</div>
				<img src={arrow} alt="" />
				<div className={styles.heading}>
					<h5>Tracking and tasks assign-ments</h5>
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text3}>
					Track the status of the lead, and their conversation process in
					connection with sales team
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text4}>
					A digital busienss intelligence with a lot of data to analyze and mine
				</div>
				<img src={arrow} alt="" />
				<div className={styles.success}>
					<h5>Success</h5>
				</div>
			</div>
		</div>
	);
};

export default First;
