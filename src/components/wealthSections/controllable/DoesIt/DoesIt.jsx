import React from "react";
import d_app from "../../../../resources/wealth/d-app.svg";
import image from "../../../../resources/wealth/img1.svg";
import image2 from "../../../../resources/wealth/img2.svg";
import image3 from "../../../../resources/wealth/img3.svg";
import image4 from "../../../../resources/wealth/img4.svg";
import image5 from "../../../../resources/wealth/img5.svg";
import image6 from "../../../../resources/wealth/img6.svg";
import Timeline from "../../../WealthCommon/timeline/Timeline";
import styles from "./doesIt.module.scss";
import Left from "./DoesItColum/Left";
import Right from "./DoesItColum/Right";

const DoesIt = () => {
	const arr = [
		{
			title: "Product Management",
			img: image,
			text: "Create the investment products you need with all required parameters",
		},
		{
			title: "Model Portfolios",
			img: image2,
			text: "Decide the included instruments with their weight in the portfolios",
		},
		{
			title: "Portfolios Benchmark",
			img: image3,
			text: "With moving markets, portfolios are drifting from their model portfolios. This process is now automated",
		},
		{
			title: "Rebalancing",
			img: image4,
			text: "Adjust the model portfolios at any time and apply to investors",
		},
		{
			title: "Reporting",
			img: image5,
			text: "Reporting and tracking every single element in the platform",
		},
		{
			title: "Execution",
			img: image6,
			text: "Execution via FIX API with any execution venue for equity cash, ETFs or any asset class",
		},
	];
	return (
		<div className={styles.DoesIt}>
			<div className={styles.wrapper + " container"}>
				<h1>Controllable Processes</h1>

				<div className={styles.forDesktop}>
					<div className={styles.forDesktopWrapper}>
						<div className={styles.desktop_left}>
							<Left arr={arr} />
						</div>
						<div className={styles.desktop_center}>
							<img src={d_app} alt="" />
						</div>
						<div className={styles.desktop_right}>
							<Right arr={arr} />
						</div>
					</div>
				</div>

				<div className={styles.forMobile}>
					<div className={styles.mobileWrapper}>
						<div className={styles.mobileTop}>
							<img src={d_app} alt="" />
						</div>
						<div className={styles.timelineContainer}>
							{arr.map((item, index) => (
								<Timeline data={{ ...item, number: index + 2, btn: true }} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoesIt;
