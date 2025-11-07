"use client";
import HeroNavigasi from "@/components/sections/heros/HeroNavigasi";
import ProductDetailsPrimary from "@/components/sections/shop/ProductDetailsPrimary";
import sliceText from "@/libs/sliceText";
import { useState } from "react";

const ProductDetailsMain = ({ currentItemId }) => {
	const [title, setCurrentTitle] = useState("Shop details");
	return (
		<div>
			<HeroNavigasi
				title={sliceText(title, 31, true)}
				text={title}
				breadcrums={[{ name: "Products", path: "/shop" }]}
				noNeedTitleAnim={true}
			/>
			<ProductDetailsPrimary
				setCurrentTitle={setCurrentTitle}
				currentItemId={currentItemId}
			/>
		</div>
	);
};

export default ProductDetailsMain;
