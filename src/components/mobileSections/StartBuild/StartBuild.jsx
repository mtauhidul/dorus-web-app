import React, { useState } from "react";
import arrow from "../../../resources/mobile/arrow.svg";
import arrow2 from "../../../resources/mobile/arrow2.svg";
import arrow3 from "../../../resources/mobile/arrow3.svg";
import person from "../../../resources/mobile/person.svg";
import onboarding from "../../../resources/new/agreement.png";
import backoffice from "../../../resources/new/back-office.png";
import balancing from "../../../resources/new/balanced.png";
import chatbot from "../../../resources/new/chatbot.png";
import compliance from "../../../resources/new/compliant.png";
import goals from "../../../resources/new/money.png";
import portfolio from "../../../resources/new/office.png";
import frontoffice from "../../../resources/new/receptionist.png";
import risk from "../../../resources/new/risks.png";
import sales from "../../../resources/new/sales.png";
import kyc from "../../../resources/new/search.png";
import api from "../../../resources/svg/Group 18.svg";
import crm from "../../../resources/svg/Group 19.svg";
import mobile from "../../../resources/svg/Group 21.svg";
import wealth from "../../../resources/svg/Group 25.svg";
import digital from "../../../resources/svg/Group 26.svg";
import operation from "../../../resources/svg/Group 28.svg";
import styles from "./StartBuild.module.scss";

const StartBuild = () => {
	const [list, setList] = useState("list1");
	const cards1 = [
		{
			id: 1,
			name: "Mobile App",
			image: mobile,
		},
		{
			id: 1,
			name: "CRM",
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

	const cards2 = [
		{
			id: 2,
			name: "Compliance",
			image: compliance,
		},
		{
			id: 2,
			name: "Back Office",
			image: backoffice,
		},
		{
			id: 2,
			name: "Front Office",
			image: frontoffice,
		},
		{
			id: 2,
			name: "Sales and Marketing",
			image: sales,
		},
	];

	const cards3 = [
		{
			id: 3,
			name: "Goals Management",
			image: goals,
		},
		{
			id: 3,
			name: "Rebalancing",
			image: balancing,
		},
		{
			id: 3,
			name: "Portfolio Builder",
			image: portfolio,
		},
		{
			id: 3,
			name: "Risk Management",
			image: risk,
		},
	];

	const cards4 = [
		{
			id: 4,
			name: "Digital Onboarding",
			image: onboarding,
		},
		{
			id: 4,
			name: "Automated KYC",
			image: kyc,
		},
		{
			id: 4,
			name: "Interactive Chat Bot",
			image: chatbot,
		},
	];
	return (
		<div className={styles.startBuild}>
			<div className={styles.wrapperBottom + " container"}>
				<div className={styles.bottom}>
					<h1>Seamless Onboarding Process</h1>
					<div className={styles.forDesktop}>
						<lottie-player
							src="https://assets2.lottiefiles.com/private_files/lf30_l0ol8r1o.json"
							background="transparent"
							speed="1"
							loop
							autoplay
						></lottie-player>
					</div>
					<div className={styles.forMobile}>
						<div className={styles.mobileTop}>
							<img className={styles.person} src={person} alt="" />
							<img src={arrow2} alt="" />
							<button>Sign up with all needed verifications</button>
							<img src={arrow} alt="" />
							<button>Interactive onboarding process begin</button>
						</div>
						<div className={styles.mobileBottom}>
							<div className={styles.card}>
								<div className={styles.left}>
									<div className={styles.div1}>
										<p>Investor chooses his desired investment product</p>
									</div>
									<div className={styles.div2}>
										<p>
											Risk profile engine automatically decide if client is
											aligible for his selection
										</p>
									</div>
								</div>
								<div className={styles.center}>
									<img src={arrow3} alt="" />
								</div>
								<div className={styles.right}>
									<div className={styles.div3}>
										<p>Application is done</p>
									</div>
								</div>
							</div>
							<button className={styles.kyc}>
								KYC Verification and account is opened
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StartBuild;
