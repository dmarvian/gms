"use client";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	const handleSelect = option => {};
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel free untuk menghubungi atau datang ke lokasi kami.
							</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input type="text" name="cfName" />
											<label className="cf-label">
												Nama Lengkap <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input type="email" name="cfEmail" />
											<label className="cf-label">
												Email <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input type="tel" name="cfPhone" />
											<label className="cf-label">
												Nomor Telepon <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Layanan" },
															{ value: "1", optionName: "Outsourcing" },
															{ value: "2", optionName: "Recruitment" },
														]}
														getSelectedOption={handleSelect}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea name="cfMessage" id="message"></textarea>
											<label className="cf-label">
												Tulis Pesan <span>*</span>
											</label>
										</div>
									</div>
									<div className="submit-btn">
										<button className="tj-primary-btn" type="submit">
											<span className="btn-text">
												<span>Kirim Pesan</span>
											</span>
											<span className="btn-icon">
												<i className="tji-arrow-right-long"></i>
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.641687007384!2d106.718848!3d-6.154744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9004a3026e5%3A0x87ae1a1afdb0e224!2sPT.%20GUNTUR%20MANDALA%20SAKTI%20(GMS)%20OFFICE!5e0!3m2!1sen!2sid!4v1762060227944!5m2!1sen!2sid"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
