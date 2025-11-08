import Link from "next/link";

const ContactTop = () => {
	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>Informasi Kontak
							</span>
							<h2 className="sec-title title-anim">
								<span>Hubungi</span> Kami
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="contact-icon">
								<i className="tji-location-3"></i>
							</div>
							<h3 className="contact-title">Alamat</h3>
							<ul className="contact-list">
								<li>
									<Link href="https://maps.app.goo.gl/JCEBDt3i6exx1ybx9" target="_blank" rel="noopener noreferrer">Jl. Raya Daan Mogot KM 14, Apt. Green Park View RD. 52</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">Email</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:gunturmandalasakti@yahoo.com">gunturmandalasakti@yahoo.com</Link>
								</li>
								<li>
									<Link href="mailto:contact@gunturmandalasakti.com">contact@gunturmandalasakti.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Telepon</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:02138764199">(021) 38764199</Link>
								</li>
								<li>
									<Link href="tel:02159582830">(021) 59582830</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">WhatsApp</h3>
							<ul className="contact-list">
								<li>
									<Link href="http://wa.me/6281211996209" target="_blank" rel="noopener noreferrer">
										+62 853-1755-5542
									</Link>
								</li>
								<li className="active">
									<Link href="http://wa.me/6281211996209" target="_blank" rel="noopener noreferrer">Yuda (HRD)</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactTop;
