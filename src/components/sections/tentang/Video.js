import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = () => {
	return (
		<section className="tj-blog-section section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-15">
						<div className="post-details-wrapper">
							<div className="blog-text text-center">
								<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-play"></i>Video
							</span>
							<h2 className="sec-title title-anim">
								<span>GMS</span> Company Profile
							</h2>
						</div>
								<div className="blog-video wow fadeInUp" data-wow-delay=".3s">
									<Image
										src="/images/artikel/video.webp"
										alt="Video"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
									<PopupVideo>
										<Link
											className="video-btn video-popup glightbox"
											href="https://www.youtube.com/watch?v=xUD5XJfIv-s"
										>
											<span>
												<i className="tji-play"></i>
											</span>
										</Link>
									</PopupVideo>
								</div>
							</div>
						</div>
					</div>

					{/* Kalau ada sidebar, yang ini nanti dipakai */}
					{/* <div className="col-lg-4">
						<BlogSidebar />
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
