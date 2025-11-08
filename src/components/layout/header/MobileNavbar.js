import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavigasi from "@/libs/getNavigasi";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavigasi();
	const NavigasiBeranda = navItems[0];
	const NavigasiTentang = navItems[1];
	const NavigasiLayanan = navItems[2];
	const NavigasiArtikel = navItems[3];
	const NavigasiKontak = navItems[4];
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							<li>
								<Link href={NavigasiBeranda?.path ? NavigasiBeranda?.path : "/"}>
									{" "}
									{NavigasiBeranda?.name ? NavigasiBeranda?.name : "Beranda"}
								</Link>
							</li>
							<MobileMenuItem
								text={NavigasiTentang?.name}
								url={NavigasiTentang?.path ? NavigasiTentang?.path : "#"}
							>
								{NavigasiTentang?.submenu?.length
									? NavigasiTentang?.submenu?.map((item, idx) => (
											<li
												key={idx}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path ? item?.path : "/#"}>
													{item?.name ? item?.name : "Tentang Kami"}
												</Link>
											</li>
									  ))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem
								text={NavigasiLayanan?.name}
								url={NavigasiLayanan?.path ? NavigasiLayanan?.path : "#"}
								submenuClass={"mega-menu-service"}
							>
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
							</MobileMenuItem>
							<li>
								<Link href={NavigasiArtikel?.path ? NavigasiArtikel?.path : "/"}>
									{" "}
									{NavigasiArtikel?.name ? NavigasiArtikel?.name : "Artikel"}
								</Link>
							</li>
							<li className="mean-last">
								<Link href={NavigasiKontak?.path ? NavigasiKontak?.path : "/"}>
									{" "}
									{NavigasiKontak?.name ? NavigasiKontak?.name : "Kontak"}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
