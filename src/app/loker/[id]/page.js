import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CareerDetails1 from "@/components/sections/loker/CareerDetails1";
import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCareers from "@/libs/getCareers";
import { notFound } from "next/navigation";
const items = getCareers();

export default async function CareerDetails({ params }) {
	const { id } = await params;

	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroNavigasi title={"Careers Details"} text={"Careers Details"} />
						<CareerDetails1 currentItemId={parseInt(id)} />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
