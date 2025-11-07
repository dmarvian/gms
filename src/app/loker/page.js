import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Careers1 from "@/components/sections/loker/Careers1";
import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Careers() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroNavigasi title={"Careers"} text={"Careers"} />
						<Careers1 />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
