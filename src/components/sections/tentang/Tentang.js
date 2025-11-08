import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className="about-img-area style-2 wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/tentang/direktur.webp"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							<div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<blockquote className="wow fadeInUp" data-wow-delay=".3s">
									<p>
										Kami berkomitmen pada kualitas, integritas, dan kepuasan pelanggan dalam setiap aspek operasional.
									</p>
									<cite>Apriyanti, Direktur</cite>
								</blockquote>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>PT Guntur Mandala Sakti
								</span>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Persaingan dalam dunia usaha semakin kompetitif dan pada akhirnya faktor SDM sebagai <span>“the man behind the gun”</span> menjadi penentu dalam memenangkan persaingan. Untuk itulah kami mengambil peran dalam peningkatan Sumber Daya Manusia (SDM) melalui kerja sama kemitraan. Undang-undang No. 13 Tahun 2003 pasal 66 ayat 3, undang-undang nomor 19 tahun 2012, undang-undang cipta kerja pasal 64 yang memberi ruang kepada perusahaan untuk mengalihkan sebagian tanggung jawab di bidang pengelolaan tenaga kerja kepada perusahaan jasa (PPJP) secara alih daya (outsourcing) dengan syarat dan ketentuan yang telah ditetapkan.
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									PT Guntur Mandala Sakti sebagai perusahaan PPJP telah menjalin kerja sama kemitraan di bidang ketenagakerjaan dengan beberapa perusahaan untuk layanan Outsourcing Management Service dan Recruitment Service. Kami juga dapat memberikan jasa konsultasi terkait hubungan industrial.
								</p>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Visi</h4>
								<p className="desc">
									Meringankan tugas perusahaan mitra dengan mengambil sebagian tanggung jawab dan risiko dalam pengelolaan SDM.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-user"></i>Fokus pada Kualitas SDM
									</li>
									<li>
										<i className="tji-operations"></i>Mendorong Efisiensi
									</li>
									<li>
										<i className="tji-chat"></i>Kemitraan yang Transparan
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Misi</h4>
								<p className="desc">
									Kami percaya bahwa keberhasilan berawal dari manusia. Misi kami:
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-team"></i>Rekrutmen Profesional
									</li>
									<li>
										<i className="tji-growth"></i>Pengembangan SDM
									</li>
									<li>
										<i className="tji-organize"></i>Pemenuhan Tenaga Kerja
									</li>
									<li>
										<i className="tji-chart"></i>Evaluasi Kinerja
									</li>
									<li>
										<i className="tji-excellence"></i>Kontrol Mutu Layanan
									</li>
								</ul>
							</div>
						</div>
						<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Unduh Company Profile Kami (.PDF)"} url={"https://gunturmandalasakti.com/gms-company-profile.pdf"} target={"_blank"} rel={"noopener noreferrer"}/>
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
		</section>
	);
};

export default About3;
