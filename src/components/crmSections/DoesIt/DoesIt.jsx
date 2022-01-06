import React from "react";
import styles from "./doesIt.module.scss";
import MyCarousel from "./MyCarousel/MyCarousel";

const DoesIt = () => {
	return (
		<div className={styles.DoesIt}>
			<div className={styles.wrapper + " container"}>
				<div className={styles.forDesktop}>
					<lottie-player
						src="https://assets6.lottiefiles.com/private_files/lf30_av3cd4jw.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</div>
				<div className={styles.forMobile}>
					<MyCarousel />
				</div>
			</div>
		</div>
	);
};

export default DoesIt;
