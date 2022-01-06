import React from "react";
import styles from "./Right.module.scss";

const Right = ({ arr }) => {
	const card1 = arr[3];
	const card2 = arr[4];
	const card3 = arr[5];
	return (
		<>
			<div className={`${styles.card_wrapper} ${styles.card_wrapper1}`}>
				<div className={`${styles.card_left}  ${styles.card_left1}`}>
					{card1.title.length > 0 && <h5>{card1.title}</h5>}
					{card1.text.length > 0 && <p>{card1.text}</p>}
				</div>
				<div className={`${styles.card_right}  ${styles.card_right1}`}>
					<div className={`${styles.dash} ${styles.dash1}`}></div>
					<img src={card1.img} alt="" />
				</div>
			</div>

			<div className={`${styles.card_wrapper} ${styles.card_wrapper2}`}>
				<div className={styles.card_left}>
					{card2.title.length > 0 && <h5>{card2.title}</h5>}
					{card2.text.length > 0 && <p>{card2.text}</p>}
				</div>
				<div className={styles.card_right}>
					<div className={`${styles.dash} ${styles.dash2}`}></div>
					<img src={card2.img} alt="" />
				</div>
			</div>

			<div className={`${styles.card_wrapper} ${styles.card_wrapper3}`}>
				<div className={styles.card_left}>
					{card3.title.length > 0 && <h5>{card3.title}</h5>}
					{card3.text.length > 0 && <p>{card3.text}</p>}
				</div>
				<div className={styles.card_right}>
					<div className={`${styles.dash} ${styles.dash3}`}></div>
					<img src={card3.img} alt="" />
				</div>
			</div>
		</>
	);
};

export default Right;
