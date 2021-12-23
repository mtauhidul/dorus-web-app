import React from "react";
import arrow from "../../../../../resources/crm/arrow.svg";
import img from "../../../../../resources/crm/img2.svg";
import styles from "./Second.module.scss";

const Second = () => {
	return (
		<div className={styles.first}>
			<div className={styles.wrapper}>
				<h5>Sales</h5>
				<img src={img} alt="" />
				<img src={arrow} alt="" />
				<div className={styles.text1}>
					Set Sales Target and assign task to team
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text2}>
					In collaboration with marketing, generate leads and assign account
					managers to them
				</div>
				<img src={arrow} alt="" />
				<div className={styles.heading}>
					<h5>Tracking and tasks assign-ments</h5>
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text3}>
					Track conversation rates, follow ups and manage your appointment with
					potential investors
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text4}>
					Crear view on the clients journey and their onboarding process to
					maximize the perfomance out of the sales team
				</div>
				<img src={arrow} alt="" />
				<div className={styles.text3}>
					A complete sales funnel in cooperation with other department to
					achieve the most of everything
				</div>
				<img src={arrow} alt="" />
				<div className={styles.success}>
					<h5>Success</h5>
				</div>
			</div>
		</div>
	);
};

export default Second;
