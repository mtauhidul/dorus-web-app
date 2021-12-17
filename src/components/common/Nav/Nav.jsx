import React from "react";
import logo from "../../../resources/svg/logo.svg";
import styles from "./nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.nav + " navbar navbar-expand-lg"}>
			<div className="container-fluid p-0">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="" />
				</a>
				<button
					className={styles.toggle + " navbar-toggler"}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className={styles.ul + " navbar-nav ms-auto mb-2 mb-lg-0"}>
						<li className="nav-item">Home</li>
						<li className="nav-item">Products</li>
						<li className="nav-item">About</li>
						<li className="nav-item">Contacts</li>
						<li className="nav-item">Eng <span>|</span></li>
						<li className="nav-item">GRE</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
