import React from "react";
import styles from "./controllable.module.scss";
import DoesIt from "./DoesIt/DoesIt";
import FormContainer from "./FormContainer";

const Controllable = () => {
	return (
		<>
			<div className={styles.partners}>
				<DoesIt />
			</div>

			<FormContainer styles={styles} />
		</>
	);
};

export default Controllable;
