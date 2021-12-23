import React from "react";
import styles from "./timeline.module.scss";

const Timeline = (props) => {
	const { img, title, text = "99" } = props?.data;

	return (
		<div className={styles.timeline}>
			<div className={styles.wrapper}>
				<div className={styles.dash}>|</div>
				<div className={styles.img_container}>
					<img src={img} alt="" />
				</div>
				<div className={styles.body}>
					{title.length > 0 && <h5>{title}</h5>}
					{text.length > 0 && <p>{text}</p>}
					 <button className={styles.btn}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
