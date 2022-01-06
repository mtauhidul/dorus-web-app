import React from "react";
import styles from "./Solutions2.module.scss";

const Solutions2 = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<h4>Dorus open modules</h4>
				<div className={styles.text}>
					<p>
						<span></span> Wealth Management Modules
					</p>
					<p>
						<span></span> CRM Modules
					</p>
					<p>
						<span></span> Finance and accounting modules
					</p>
					<p>
						<span></span> Marketing Modules
					</p>
					<p>
						<span></span> Dealing Modules
					</p>
				</div>
				<button className={styles.scheduleBtn}>Schedule Demo</button>
			</div>
			<div className={styles.right}>
				<div>
					Control your own UX/UI with the Open API library, including all
					possible modules offered within the solution and offer the experience
					you would like to have to your investors.
				</div>
				<div>
					Or you can partner with us to build your own WL business using our
					ready, scalabale and secured structure. Forget about the technical
					infrastructure, and security, we handle it for you, and you can
					onboard your own asset managers to use the solution and offer the
					smooth investment experience to their clients.
				</div>
			</div>
		</div>
	);
};

export default Solutions2;
