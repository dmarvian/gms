import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavigasi from "@/libs/getNavigasi";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavigasi();
	const NavigasiBeranda = makeActiveLink(navItems[0]);
	const NavigasiTentang = makeActiveLink(navItems[1]);
	const NavigasiLayanan = makeActiveLink(navItems[2]);
	const NavigasiLoker = makeActiveLink(navItems[3]);
	const NavigasiArtikel = makeActiveLink(navItems[4]);
	const NavigasiKontak = makeActiveLink(navItems[5]);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li className={NavigasiBeranda?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={NavigasiBeranda?.path ? NavigasiBeranda?.path : ""}>
							{NavigasiBeranda?.name ? NavigasiBeranda?.name : "Beranda"}
						</Link>
					</li>
					<li className={NavigasiTentang?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={NavigasiTentang?.path ? NavigasiTentang?.path : ""}>
							{NavigasiTentang?.name ? NavigasiTentang?.name : "Beranda"}
						</Link>
					</li>
					<li
						className={`has-dropdown ${
							NavigasiLayanan?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={NavigasiLayanan?.path ? NavigasiLayanan?.path : ""}>
							{NavigasiLayanan?.name}
						</Link>
						<ul className="sub-menu  mega-menu-service">
							{NavigasiLayanan?.submenu?.length
								? NavigasiLayanan?.submenu?.map((item, idx) => (
										<li key={idx}>
											<Link
												className="mega-menu-service-single"
												href={item?.path ? item?.path : "/"}
											>
												{" "}
												<span className="mega-menu-service-icon">
													<i
														className={
															item?.icon ? item?.icon : "tji-service-1"
														}
													></i>
												</span>{" "}
												<span className="mega-menu-service-title">
													{item?.name
														? item?.name
														: "Business process optimization"}
												</span>{" "}
												<span className="mega-menu-service-nav">
													<i className="tji-arrow-right-long"></i>
													<i className="tji-arrow-right-long"></i>
												</span>
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li className={NavigasiArtikel?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={NavigasiArtikel?.path ? NavigasiArtikel?.path : ""}>
							{NavigasiArtikel?.name ? NavigasiArtikel?.name : "Artikel"}
						</Link>
					</li>
					<li className={NavigasiLoker?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={NavigasiLoker?.path ? NavigasiLoker?.path : ""}>
							{NavigasiLoker?.name ? NavigasiLoker?.name : "Loker"}
						</Link>
					</li>
					<li className={NavigasiKontak?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={NavigasiKontak?.path ? NavigasiKontak?.path : ""}>
							{NavigasiKontak?.name ? NavigasiKontak?.name : "Kontak"}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
