import Header from "@/components/layout/header/Header";
import Hero from "@/components/sections/gms-hero";
import Mitra from "@/components/sections/gms-mitra";
import MengapaGMS from "@/components/sections/gms-mengapa";
import Layanan from "@/components/sections/gms-layanan";
import Artikel from "@/components/sections/blogs/Blogs2";
import Footer2 from "@/components/layout/footer/Footer2";
import About2 from "@/components/sections/about/About2";
import Portfolios2 from "@/components/sections/portfolios/Portfolios2";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import Process from "@/components/sections/process/Process";
import Team1 from "@/components/sections/teams/Team1";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home2() {
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
						<Team1 type={undefined} />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
