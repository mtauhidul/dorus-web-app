import React from "react";
import img7 from "../../../resources/wealth/img7.svg";
import styles from "./Solutions2.module.scss";

const Solutions2 = () => {
	return (
		<div className={styles.Solutions2}>
			<div className={styles.wrapper + " container"}>
				<h1>Wealth Management in Broad Scope</h1>
				<div className={styles.forDesktop}>
					<lottie-player
						src="https://assets2.lottiefiles.com/private_files/lf30_g5ooewlb.json"
						background="#ffffff"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</div>
				<div className={styles.forMobile}>
					<div className={styles.textContainer}>
						<div>
							At Dorus tech, we wanted to cover as much as possible the
							different business needs in the scope of wealth management.
						</div>
						<div>
							Wealth Management is an unlimited industry that covers different
							jurisdictions, asset classes, strategies, target audiences.
						</div>
						<div>
							Dorus tries to cover as much as possible that any business in
							wealth management may need
						</div>
					</div>

					<div className={styles.animationCard}>
						<div className={`${styles.cardItem} ${styles.cardItem1}`}>
							<span className={styles.span1}></span>
							<span className={styles.span10}></span>
							<img src={img7} alt="" />
							<div>
								<h5>Multi-employer Pensions</h5>
								<p>
									The linkage between trustees, employers and employee to manage
									pensions products or occupational investments is now possible.
								</p>
							</div>
							<div className={styles.borderBottom}>
								<span className={styles.span2}></span>
								<span className={styles.span3}></span>
							</div>
						</div>
						<div className={`${styles.cardItem} ${styles.cardItem2}`}>
							<img src={img7} alt="" />
							<div>
								<h5>Private Equity</h5>
								<p>
									Managing Private equity for big investors require a lot of
									legal reporting, valuation techniques and communication with
									investors.
								</p>
							</div>
						</div>
						<div className={`${styles.cardItem} ${styles.cardItem1}`}>
							<span className={styles.span1}></span>
							<span className={styles.span4}></span>
							<img src={img7} alt="" />
							<div>
								<h5>Robo-Advisory Module </h5>
								<p>
									Set the risk profiles matrix with goal management and let the
									system handles the risk profiling together with investment
									proposals
								</p>
							</div>
							<div className={styles.borderBottom}>
								<span className={styles.span2}></span>
								<span className={styles.span3}></span>
							</div>
						</div>
						<div className={`${styles.cardItem} ${styles.cardItem4}`}>
							<span className={styles.span5}></span>
							<span className={styles.span10}></span>
							<img src={img7} alt="" />
							<div>
								<h5>Portfolio Management</h5>
								<p>
									Would you like to manage your client’s funds in the
									traditional way, no problems with the MAM setup you can trade
									on behlaf of your clients and get all reports, charges and
									processes done for you
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions2;
