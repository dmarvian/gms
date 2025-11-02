import Footer from "@/components/layout/footer/gms-footer";
import Header from "@/components/layout/header/Header";
import Brands1 from "@/components/sections/brands/Brands1";
import HeroInner from "@/components/sections/hero/HeroInner";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Services() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Layanan"} text={"Layanan"} />
						<ServicesPrimary />
						<Brands1 type={2} />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
