import Header from "@/components/layout/header/Header";
import Hero from "@/components/sections/hero/Hero";
import Mitra from "@/components/sections/mitra/Mitra";
import MengapaGMS from "@/components/sections/mengapa/Mengapa";
import Layanan from "@/components/sections/layanan/Layanan";
import Artikel from "@/components/sections/artikel/Artikel";
import Footer2 from "@/components/layout/footer/gms-footer";
import About2 from "@/components/sections/tentang/About2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Beranda() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero />
						<Mitra />
						<MengapaGMS />
						<Layanan />
						<Artikel />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
