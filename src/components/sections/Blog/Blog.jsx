import React from "react";
import img1 from "../../../resources/image/img3 (1).jpg";
import img2 from "../../../resources/image/img3 (2).jpg";
import img3 from "../../../resources/image/img3 (3).jpg";
import BlogCard from "../../common/BlogCard/BlogCard";
import styles from "./blog.module.scss";

const Blog = () => {
	const cardData = [
		{
			id: 1,
			date: "23.07.2021",
			title: "Mobile App",
			img: img1,
			text: "Ranging from huge investment funds to focused wealth management manager we are here to simplify your workflow!",
		},
		{
			id: 2,
			date: "15.09.2021",
			title: "Mobile App Mobile App Mobile App",
			img: img2,
			text: "Ranging from huge investment funds to focused wealth management manager",
		},
		{
			id: 3,
			date: "20.11.2021",
			title: "Mobile App",
			img: img3,
			text: "Ranging from huge investment funds to focused wealth management manager we are here to simplify your workflow!",
		},
	];
	return (
		<div className={styles.blog}>
			<div className={styles.wrapper + " container"}>
				<h1>Our Blog</h1>
				<div className={styles.cardContainer}>
					{cardData.map((card) => (
						<BlogCard key={card.id} data={card} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
