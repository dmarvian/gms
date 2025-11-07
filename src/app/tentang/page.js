import Footer from "@/components/layout/footer/gms-footer";
import Header from "@/components/layout/header/Header";
import TentangGMS from "@/components/sections/tentang/Tentang";
import VideoGMS from "@/components/sections/tentang/Video";
import Brands1 from "@/components/sections/mitra/Brands1";
import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import Team1 from "@/components/sections/teams/Team1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function About() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroNavigasi title={"Profil GMS"} text={"Profil GMS"} />
						<TentangGMS type={2} />
						<VideoGMS type={2} />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
