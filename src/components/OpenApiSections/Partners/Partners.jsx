import React from "react";
import Solutions2 from "../Solutions2/Solutions2";
import Table from "../Table/Table/Table";
import FormContainer from "./FormContainer";
import styles from "./partners.module.scss";

const Partners = () => {
	return (
		<>
			<div className={styles.partners}>
				<div className={styles.wrapper + " container"}>
					<h1>Included Modules</h1>
					<Solutions2 />
					<Table/>
				</div>
			</div>
			<FormContainer styles={styles} />
		</>
	);
};

export default Partners;
