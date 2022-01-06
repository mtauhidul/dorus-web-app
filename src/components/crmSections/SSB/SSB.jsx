import React from "react";
import security from "../../../resources/crm/security.svg";
import security2 from "../../../resources/crm/security2.svg";
import security3 from "../../../resources/crm/security3.svg";
import styles from "./SSB.module.scss";

const SSB = () => {
	return (
		<div className={styles.SSB}>
			<div className={styles.wrapper + " container"}>
				<h1>The SSB Rule</h1>
				<div className={styles.card}>
					<div className={styles.card_wrapper}>
						<div className={styles.card_left}>
							<div>
								We built our solutions on our own philosophy that satisfies the
								SSB rule, in which the solution (specially in Fintech sector)
								must have:
							</div>
						</div>
						<div className={styles.card_right}>
							<div className={styles.right_item}>
								<div className={styles.imageContainer}>
									<img src={security} alt="Security" />
									<h5>Security</h5>
								</div>
								<div className={styles.textContainer}>
									Different layers of security with clients’ data encryption
								</div>
							</div>
							<div className={styles.right_item}>
								<div className={styles.imageContainer}>
									<img src={security2} alt="Security" />
									<h5>Scalability</h5>
								</div>
								<div className={styles.textContainer}>
									Cloud Based Auto-scaled solution with flexible archcitecture
									to support multiple-regions
								</div>
							</div>
							<div className={styles.right_item}>
								<div className={styles.imageContainer}>
									<img src={security3} alt="Security" />
									<h5>Business Intelligence</h5>
								</div>
								<div className={styles.textContainer}>
									Data is the core business success, with CRM business
									intelligence and reports, success is more closer
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SSB;
