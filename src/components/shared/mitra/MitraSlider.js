"use client";

import getMitra from "@/libs/getMitra";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MitraSlider = ({ className }) => {
	const mitra = getMitra();
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: true,
			}}
			className={`client-slider ${className ? className : "client-slider-1"}`}
			modules={[Autoplay]}
		>
			{mitra?.length
				? mitra?.map(({ img, name }, idx) => (
						<SwiperSlide key={idx} className="client-item">
							<div className="client-logo">
								<img
									src={img ? img : "/images/mitra/1.webp"}
									alt="Mitra"
								/>
								<p className="client-name">{name ? name : "Mitra"}</p>
							</div>
							
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default MitraSlider;
