import MitraSlider from "@/components/shared/mitra/MitraSlider";

const Mitra = () => {
	return (
		<section className="tj-client-section section-top-gap">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						<div
							className="client-content style-2 wow fadeIn"
							data-wow-delay=".3s"
						>
							<h5 className="sec-title">
								<span className="client-numbers">25+</span>{" "}
								Mitra Telah Bergabung dengan <span className="client-text">GMS</span>
							</h5>
						</div>
						<MitraSlider />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mitra;
