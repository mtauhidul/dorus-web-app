import React, { useState } from "react";
import api from "../../../resources/svg/Group 18.svg";
import crm from "../../../resources/svg/Group 19.svg";
import mobile from "../../../resources/svg/Group 21.svg";
import wealth from "../../../resources/svg/Group 25.svg";
import digital from "../../../resources/svg/Group 26.svg";
import operation from "../../../resources/svg/Group 28.svg";
import styles from "./StartBuild.module.scss";
import img from "../../../resources/svg/Group 43.svg";

const StartBuild = () => {
	const [list, setList] = useState("list1");
	const cards = [
		{
			id: 1,
			name: "Mobile App",
			image: mobile,
		},
		{
			id: 1,
			name: "C R M",
			image: crm,
		},
		{
			id: 1,
			name: "Open Api",
			image: api,
		},
		{
			id: 1,
			name: "wealth Management",
			image: wealth,
		},
		{
			id: 1,
			name: "Digital onboarding",
			image: digital,
		},
		{
			id: 1,
			name: "Operation",
			image: operation,
		},
	];
	return (
		<div className={styles.startBuild}>
			<div className={styles.wrapper + " container"}>
				<div className={styles.wrapperTop}>
					<div className={styles.left}>
						<h3
							onClick={() => setList("list1")}
							className={
								list === "list1"
									? `${styles.list} ${styles.activeList}`
									: styles.list
							}
						>
							Main Modules
						</h3>
						<h3
							onClick={() => setList("list2")}
							className={
								list === "list2"
									? `${styles.list} ${styles.activeList}`
									: styles.list
							}
						>
							Operations
						</h3>
						<h3
							onClick={() => setList("list3")}
							className={
								list === "list3"
									? `${styles.list} ${styles.activeList}`
									: styles.list
							}
						>
							Logics
						</h3>
						<h3
							onClick={() => setList("list4")}
							className={
								list === "list4"
									? `${styles.list} ${styles.activeList}`
									: styles.list
							}
						>
							Onboarding
						</h3>
					</div>
					<div className={styles.right}>
						{cards.map((card) => (
							<div className={styles.cardCustom + " card"} key={card.id + "card"}>
								<img
									src={card?.image}
									className={styles.img + " card-img-top"}
									alt="..."
								/>
								<div className="card-body">
									<h4>{card.name}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.wrapperBottom + " container"}>
				<div className={styles.bottom}>
					<p>Learn more</p>
					<h2>Start Building Your Dorus Now!</h2>
					<button>Build Your Robo Advisory</button>
				</div>
			</div>
		</div>
	);
};

export default StartBuild;
