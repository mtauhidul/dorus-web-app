import React from "react";
import styles from "./timeline.module.scss";

const Timeline = (props) => {
	const { reverted, img, title, last = true, number } = props?.data;
	if (reverted) {
		return (
			<div className={styles.timeline}>
				<div className={styles.wrapper}>
					<div className={styles.revert}>
						<div>
							<h4>{title}</h4>
						</div>
					</div>
					<div className={styles.left}>
						<img src={img} alt="" />
					</div>
				</div>
				{!last && (
					<div className={styles.number}>
						<span>|</span>
						<span>|</span>
						<div className={styles.num}>{number}</div>
						<span>|</span>
						<span>|</span>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className={styles.timeline}>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<img src={img} alt="" />
				</div>
				<div className={styles.right}>
					<div>
						<h4>{title}</h4>
					</div>
				</div>
			</div>
			{true && (
				<div className={styles.number}>
					<span>|</span>
					<span>|</span>
					<div className={styles.num}>{number}</div>
					<span>|</span>
					<span>|</span>
				</div>
			)}
		</div>
	);
};

export default Timeline;
