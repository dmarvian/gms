import Footer from "@/components/layout/footer/gms-footer";
import Header from "@/components/layout/header/Header";
import Kontak from "@/components/sections/kontak/FormKontak";
import InfoKontak from "@/components/sections/kontak/InfoKontak";
import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Contact() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroNavigasi title={"Kontak"} text={"Kontak"} />
						<InfoKontak />
						<Kontak />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
