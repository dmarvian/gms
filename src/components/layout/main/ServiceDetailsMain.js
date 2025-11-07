import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import ServicesDetailsPrimary from "@/components/sections/layanan/ServicesDetailsPrimary";
import getALlServices from "@/libs/getALayanan";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const ServiceDetailsMain = ({ currentItemId }) => {
	const items = getALlServices();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { title } = currentItem || {};
	return (
		<div>
			<HeroNavigasi
				title={title ? title : "Service Details"}
				text={title ? title : "Service Details"}
				breadcrums={[{ name: "Layanan", path: "/layanan" }]}
			/>
			<ServicesDetailsPrimary
				option={{
					currentItem,
					items,
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
			/>
		</div>
	);
};

export default ServiceDetailsMain;
