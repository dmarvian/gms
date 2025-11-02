import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import MarqueeSlider1 from "@/components/shared/marquee/MarqueeSlider1";
import Link from "next/link";

const Footer2 = () => {
	return (
		<footer className="tj-footer-section footer-2 section-gap-x">
			
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-1 wow fadeInUp"
								data-wow-delay=".1s"
							>
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo-2.webp" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Mengembangkan SDM berkualitas demi meningkatkan efisiensi dan produktivitas perusahaan.
									</p>
								</div>
								<div className="award-logo-area">
									<div className="award-logo">
										<img src="/images/footer/award-logo-white-1.webp" alt="" />
									</div>
									<div className="award-logo">
										<img src="/images/footer/award-logo-white-2.webp" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Layanan</h5>
								<ul>
									<li>
										<Link href="/services/1">Manpower</Link>
									</li>
									<li>
										<Link href="/services/2">Business Process</Link>
									</li>
									<li>
										<Link href="/services/3">Facility Management</Link>
									</li>
									<li>
										<Link href="/services/4">Recruitment</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Informasi</h5>
								<ul>
									<li>
										<Link href="/">Kontak</Link>
									</li>
									<li>
										<Link href="/">Lowongan Pekerjaan</Link>
									</li>
									<li>
										<Link href="/">Team Member</Link>
									</li>

									<li>
										<Link href="/">Artikel <span className="badge">New</span></Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Kantor Operasional</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>Jl. Raya Daan Mogot KM 14, Apt. Green Park View RD. 52, Cengkareng - Jakarta Barat</span>
									</div>
									<div className="contact-item">
										<Link href="tel:02138764199">(021) 38764199</Link>
										<Link href="mailto:gunturmandalasakti@yahoo.com">
											gunturmandalasakti@yahoo.com
										</Link>
									</div>
									<div className="contact-item">
										<span>
											<i className="tji-clock"></i>Weekday, 08.00 - 17.00 Sabtu, 08.00 - 13.00
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="tj-copyright-area-2">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; 2025 
										<Link
											href="/"
											target="_blank"
										>
											PT GMS.
										</Link>{" "}
										All right reserved.
									</p>
								</div>
								
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer2;
