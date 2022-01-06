import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";

const MyCarousel = () => {
	const responsive = {
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};
	return (
		<Carousel
			swipeable={false}
			draggable={false}
			showDots={false}
			responsive={responsive}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={2000}
			keyBoardControl={true}
			transitionDuration={2000}
			removeArrowOnDeviceType={["tablet", "mobile"]}
		>
			<First />
			<Second />
			<Third />
		</Carousel>
	);
};

export default MyCarousel;
