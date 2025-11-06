import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const BlogCard3 = ({ blog, idx }) => {
	const { title, desc, id, img2, category, date, day, month } = blog || {};
	return (
		<div
			className="blog-item style-3 wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.2)}
		>
			<div className="blog-thumb">
				<Link href={`/artikel/${id}`}>
					<img src={img2 ? img2 : "/images/blog/blog-6.webp"} alt="" />
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href={`/artikel?category=${makePath(category)}`}>
							{category}
						</Link>
					</span>
					<span>
						By <Link href={`/artikel/${id}`}>GMS Team</Link>
					</span>
				</div>
				<h4 className="title">
					<Link href={`/artikel/${id}`}>{title}.</Link>
				</h4>
				<Link className="text-btn" href={`/artikel/${id}`}>
					<span className="btn-text">
						<span>Read More</span>
					</span>
					<span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default BlogCard3;
