import React from "react";
import pig from "../../../resources/open/man.svg";
import styles from "./Solutions1.module.scss";

const Solutions1 = () => {
	return (
		<div className={styles.Solutions1}>
			<div className={styles.wrapper + " container"}>
				<div className={styles.body}>
					<div className={styles.left}>
						<h1>OPEN API</h1>
						<p>
							You can build your own application either in web or mobile using
							our backend without any limitations on the functions included
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
