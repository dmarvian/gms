import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard4 = ({ blog, idx }) => {
	const {
		title,
		desc,
		id,
		img = "/images/artikel/blog-1.webp",
		category,
		date,
		day,
		month,
	} = blog || {};
	return (
		<div
			className="blog-item style-3 wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.2)}
		>
			<div className="blog-thumb">
				<Link href={`/artikel/${id}`}>
					<img src={img} alt="" />
				</Link>
				{idx === 0 ? (
					<div className="blog-date">
						<span className="date">{modifyNumber(day)}</span>
						<span className="month">{month}</span>
					</div>
				) : (
					""
				)}
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
				<ButtonPrimary
					text={"Read More"}
					url={`/artikel/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default BlogCard4;
