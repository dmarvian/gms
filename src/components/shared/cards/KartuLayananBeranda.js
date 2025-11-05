import Link from "next/link";

const KartuLayanan = ({ service, idx, lastItem }) => {
	const { title, titleLarge, job1, job2, job3, desc, id, totalProject, img, svg, iconName } = service || {};

	return (
		<div className="service-item-wrapper tj-fadein-right-on-scroll">
			<div className="service-item style-2 ">
				<div className="title-area">
					<div className="service-icon">
						<i className={iconName ? iconName : "tji-service-1"}></i>
					</div>
					<h4 className="title">
						<Link href={`/layanan/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="service-content">
					<p className="desc">
						{titleLarge}
					</p>
					<ul className="list-items">
						<li>
							<i className="tji-list"></i>{job1}
						</li>
						<li>
							<i className="tji-list"></i>{job2}
						</li>
						<li>
							<i className="tji-list"></i>{job3}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default KartuLayanan;
