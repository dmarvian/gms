"use client";
import BlogsPrimary from "@/components/sections/artikel/BlogsPrimary";
import HeroNavigasi from "@/components/sections/hero/HeroNavigasi";
import filterItems from "@/libs/filterItems";
import getBlogs from "@/libs/getBlogs";
import makeText from "@/libs/makeText";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const BlogMain = () => {
	const allItems = useMemo(() => getBlogs());
	const category = useSearchParams()?.get("category");
	const tag = useSearchParams()?.get("tag");
	const author_role = useSearchParams()?.get("author_role");
	const search = useSearchParams()?.get("search");
	// Filter Items
	const filteredItems = filterItems(
		allItems,
		category
			? "category"
			: tag
			? "tags"
			: author_role
			? "role"
			: search
			? "search"
			: "",
		category
			? category
			: tag
			? tag
			: author_role
			? author_role
			: search
			? search
			: ""
	);

	return (
		<div>
			<HeroNavigasi
				title={
					category
						? `Category: ${makeText(category, true)}`
						: tag
						? `Tag: ${makeText(tag, true)}`
						: author_role
						? author_role
						: search
						? makeText(search, true)
						: "Artikel"
				}
				text={
					category
						? `${makeText(category, true)}`
						: tag
						? ` ${makeText(tag, true)}`
						: author_role
						? `${author_role}`
						: search
						? `${makeText(search, true)}`
						: "Artikel"
				}
				breadcrums={
					category || tag || author_role || search
						? [{ name: "Artikel", path: "/artikel" }]
						: []
				}
			/>
			<BlogsPrimary filteredItems={filteredItems} />
		</div>
	);
};

export default BlogMain;
