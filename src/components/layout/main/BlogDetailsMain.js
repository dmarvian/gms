import BlogDetailsPrimary from "@/components/sections/artikel/BlogDetailsPrimary";
import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
const BlogDetailsMain = ({ currentItemId }) => {
	const items = getBlogs();
	const currentId = currentItemId;
	const option = getPreviousNextItem(items, currentId);
	const { title } = option?.currentItem || {};
	return (
		<div>
			<HeroNavigasi
				title={title}
				text={title ? title : "Blog Details"}
				breadcrums={[{ name: "Artikel", path: "/artikel" }]}
			/>
			<BlogDetailsPrimary option={option} />
		</div>
	);
};

export default BlogDetailsMain;
