import React from "react";
import DoesIt from "../components/crmSections/DoesIt/DoesIt";
import Footer from "../components/crmSections/Footer/Footer";
import Hero from "../components/crmSections/Hero/Hero";
import Partners from "../components/crmSections/Partners/Partners";
import Solutions from "../components/crmSections/Solutions/Solutions";
import SSB from "../components/crmSections/SSB/SSB";

const Crm = () => {
	return (
		<div style={{ backgroundColor: "whitesmoke" }}>
			<Hero />
			<Solutions />
			<DoesIt />
			<SSB />
			<Partners />
			<Footer />
		</div>
	);
};

export default Crm;
