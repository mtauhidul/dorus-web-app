import React from "react";
import pig from "../../../resources/wealth/pig.svg";
import styles from "./solutions1.module.scss";

const Solutions1 = () => {
	return (
		<div className={styles.Solutions1}>
			<div className={styles.wrapper + " container"}>
				<div className={styles.body}>
					<div className={styles.left}>
						<h1>Wealth Management solutions all now digital</h1>
						<p>
							Robot-Advisory, Private Equity, Venture Capital, Portfolio
							Management, Pension Management all are in one place now
						</p>
					</div>
					<div className={styles.right}>
						<img src={pig} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions1;
