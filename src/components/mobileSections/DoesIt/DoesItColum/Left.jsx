import React from "react";
import styles from "./Left.module.scss";

const Left = ({ arr }) => {
	const card1 = arr[0];
	const card2 = arr[1];
	const card3 = arr[2];
	return (
		<>
			<div className={`${styles.card_wrapper} ${styles.card_wrapper1}`}>
				<div className={`${styles.card_left}  ${styles.card_left1}`}>
					{card1.title.length > 0 && <h5>{card1.title}</h5>}
					{card1.text.length > 0 && <p>{card1.text}</p>}
				</div>
				<div className={`${styles.card_right}  ${styles.card_right1}`}>
					<img src={card1.img} alt="" />
					<div className={`${styles.dash} ${styles.dash1}`}></div>
				</div>
			</div>

			<div className={styles.card_wrapper}>
				<div className={styles.card_left}>
					<h5>Transparency</h5>
					{card2.text.length > 0 && <p>{card2.text}</p>}
				</div>
				<div className={styles.card_right}>
					<img src={card2.img} alt="" />
					<div className={`${styles.dash} ${styles.dash2}`}></div>
				</div>
			</div>

			<div className={`${styles.card_wrapper} ${styles.card_wrapper3}`}>
				<div className={styles.card_left}>
					{card3.title.length > 0 && <h5>{card3.title}</h5>}
					{card3.text.length > 0 && <p>{card3.text}</p>}
				</div>
				<div className={styles.card_right}>
					<img src={card3.img} alt="" />
					<div className={`${styles.dash} ${styles.dash3}`}></div>
				</div>
			</div>
		</>
	);
};

export default Left;
