import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { penulis, category, title, pembuka, quotes, quotesby, kesimpulan, subjudul1, paragraf1, subjudul2, paragraf2, subjudul3, paragraf3, poin1, poin2, poin3, poin4, poin5, poin6, date, tags } = currentItem || {};
	return (
		<section className="tj-blog-section section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<h2 className="title title-anim">{title}</h2>
							<div
								className="blog-category-two wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-user"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Ditulis oleh:</span>
										<h6 className="title">
											<Link href="blog-details.html">{penulis}</Link>
										</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Diperbarui pada:</span>
										<h6 className="text">{date}</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-window"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Kategori:</span>
										<h6 className="text">{category}</h6>
									</div>
								</div>
							</div>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{pembuka}
								</p>

								<blockquote className="wow fadeInUp" data-wow-delay=".3s">
									<p>
										{quotes}
									</p>
									<cite>{quotesby}</cite>
								</blockquote>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									{subjudul1}
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{paragraf1}
								</p>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									{subjudul2}
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{paragraf2}
								</p>
								<ul className="wow fadeInUp" data-wow-delay=".3s">
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										{poin1}
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										{poin2}
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										{poin3}
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										{poin4}
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										{poin5}
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										{poin6}
									</li>
								</ul>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Kesimpulan
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{kesimpulan}
								</p>
							</div>
							<div className="tj-tags-post wow fadeInUp" data-wow-delay=".3s">
								<div className="tagcloud">
									<span>Tags:</span>
									{tags?.length
										? tags?.map((tag, idx) => (
												<Link key={idx} href={`/artikel?tag=${makePath(tag)}`}>
													{tag}
												</Link>
										  ))
										: ""}
								</div>
								<div className="post-share">
									<ul>
										<li> Share:</li>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="tj-post__navigation  wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/artikel/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/artikel"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/artikel/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
