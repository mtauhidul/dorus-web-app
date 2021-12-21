import React from "react";
import d_app from "../../../resources/mobile/d-app.svg";
import image from "../../../resources/mobile/img1.svg";
import image2 from "../../../resources/mobile/img2.svg";
import image3 from "../../../resources/mobile/img3.svg";
import image4 from "../../../resources/mobile/img4.svg";
import image5 from "../../../resources/mobile/img5.svg";
import image6 from "../../../resources/mobile/img6.svg";
import Timeline from "../../mobileCommon/timeline/Timeline";
import styles from "./doesIt.module.scss";
import Left from "./DoesItColum/Left";
import Right from "./DoesItColum/Right";

const DoesIt = () => {
	const arr = [
		{
			title: "Goals Management ",
			img: image,
			text: "and investment packages proposals based on digital risk profiling process",
		},
		{
			title: "",
			img: image2,
			text: "All information needed to make a",
		},
		{
			title: "Detailed Reports and Statements",
			img: image3,
			text: "available to download",
		},
		{
			title: "Digital Onboardign",
			img: image4,
			text: "Dorus app, allows the automated kyc module to onboartd investors very quickly and easily",
		},
		{
			title: "24/7 Availability ",
			img: image5,
			text: "let your investors to tharck their investments 24/7 ",
		},
		{
			title: "Stay Сonnecteed ",
			img: image6,
			text: "Reach to your investors more quicker with push notifications with main events",
		},
	];
	return (
		<div className={styles.DoesIt}>
			<div className={styles.wrapper + " container"}>
				<h1>All Process, One Place</h1>

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
								<Timeline data={{ ...item, number: index + 2 }} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoesIt;
