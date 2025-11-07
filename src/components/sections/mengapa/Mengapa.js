import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/mengapa/mengapa-item";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const MengapaKami = ({ type = 1 }) => {
	const items = [
		{
			title: "Berpengalaman Lebih dari 10 Tahun",
			desc: "Dengan rekam jejak lebih dari dua dekade, kami telah dipercaya oleh berbagai klien dari beragam sektor. Pengalaman ini menjadi fondasi kuat dalam memberikan pelayanan yang andal dan sesuai dengan kebutuhan klien.",
			initActive: true,
		},
		{
			title: "Tenaga Kerja Profesional dan Bersertifikasi",
			desc: "Seluruh personel yang kami tempatkan telah melalui proses pelatihan khusus dan memiliki sertifikasi resmi sesuai standar industri. Komitmen terhadap profesionalisme dan integritas menjadi prioritas utama dalam setiap layanan yang kami berikan.",
			initActive: false,
		},
		{
			title: "Sistem Pengelolaan SDM Terintegrasi",
			desc: "Kami menerapkan sistem manajemen sumber daya manusia berbasis teknologi untuk memastikan penempatan, jadwal kerja, serta evaluasi personel dilakukan secara akurat dan efisien. Hal ini memungkinkan kami menjaga kualitas operasional secara konsisten.",
			initActive: false,
		},
		{
			title: "Evaluasi Kinerja yang Konsisten",
			desc: "Kami melakukan pemantauan kinerja secara rutin melalui mekanisme evaluasi internal dan audit lapangan. Proses ini bertujuan untuk menjaga standar mutu serta melakukan tindak lanjut secara cepat dan tepat apabila ditemukan ketidaksesuaian.",
			initActive: false,
		},
		{
			title: "Layanan Cepat dan Transparan",
			desc: "Kami menyediakan saluran komunikasi yang responsif dan terbuka untuk memastikan setiap masukan atau permintaan pelanggan dapat ditangani dengan baik. Transparansi dalam pelayanan menjadi bagian dari komitmen kami dalam membangun hubungan kerja yang saling percaya.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/mengapa/mengapa.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Mengapa Memilih GMS?
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Mulai Konsultasi Gratis</h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:02138764199">
											<span>(021) 38764199</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MengapaKami;
