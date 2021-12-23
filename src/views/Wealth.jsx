import React from "react";
import Footer from "../components/crmSections/Footer/Footer";
import Controllable from "../components/wealthSections/controllable/Controllable";
import Hero from "../components/wealthSections/Hero/Hero";
import Solutions1 from "../components/wealthSections/solutions1/Solutions1";
import Solutions2 from "../components/wealthSections/Solutions2/Solutions2";

const Wealth = () => {
	return (
		<div>
			<div style={{ background: "white" }}>
				<Hero />
			</div>
			<Solutions1 />
			<Solutions2 />
			<Controllable />
			<Footer />
		</div>
	);
};

export default Wealth;
