import React from "react";
import Footer from "../components/OpenApiSections/Footer/Footer";
import Hero from "../components/OpenApiSections/Hero/Hero";
import Partners from "../components/OpenApiSections/Partners/Partners";
import Solutions1 from "../components/OpenApiSections/Solutions1/Solutions1";

const OpenApi = () => {
	return (
		<div>
			<div style={{ background: "white" }}>
				<Hero />
			</div>
			<Solutions1 />
			<Partners />
			<Footer />
		</div>
	);
};

export default OpenApi;
