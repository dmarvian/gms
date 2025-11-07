"use client";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogSingle = ({ blog, idx }) => {
	const {
		id,
		detailsImg,
		img = "/images/artikel/blog-1.webp",
		title,
		pembuka,
		desc,
		blogTopList,
		category,
		slider,
		author,
		popupVideo,
		day,
		month,
		date,
		comments,
	} = blog ? blog : {};

	return (
		<article
			className="blog-item wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="blog-thumb">
				<Link href={`/artikel/${id}`}>
					<Image src={img} alt="" width={870} height={450} />
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
				<h3 className="title">
					<Link href={`/artikel/${id}`}>{title}</Link>
				</h3>
				<p className="desc">
					{pembuka}
				</p>
				<ButtonPrimary
					text={"Lihat Detail"}
					url={`/artikel/${id}`}
					isTextBtn={true}
				/>
			</div>
		</article>
	);
};

export default BlogSingle;
