import React from "react";
import facebook from "../../../resources/svg/facebook.svg";
import instagram from "../../../resources/svg/instagram.svg";
import linkedin from "../../../resources/svg/linkedin.svg";
import logo from "../../../resources/svg/logo.svg";
import twitter from "../../../resources/svg/twitter.svg";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper + " container"}>
				<div className={styles.left}>
					<img src={logo} alt="logo" />
					<p>© 2020-2021 Dorus</p>
				</div>
				<div className={styles.center}>
					<p>
						The Growth Plan aims to achieve high growth over the longer term, by
						investing mostly in Stocks, but also in Government & Corporate
						bonds. This plan is suitable for investors who are interested in
						high growth and can accept significant movements (up & down) in
						value. However, investors can withdraw their capital at any time.
						Investing in financial assets always involves some measured degree
						of risk, and up & down movements in value is to be expected.
						Remember that with investing there is always risk and you might
						receive you back less than invested.
					</p>
				</div>
				<div className={styles.right}>
					<div className={styles.linkContainer}>
						<ul>
							<li>
								<img src={facebook} alt="facebook" />
							</li>
							<li>
								<img src={twitter} alt="twitter" />
							</li>
							<li>
								<img src={linkedin} alt="linkedin" />
							</li>
							<li>
								<img src={instagram} alt="instagram" />
							</li>
						</ul>
						<p>
							<a href="mailto:support@dorus.com">support@dorus.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
