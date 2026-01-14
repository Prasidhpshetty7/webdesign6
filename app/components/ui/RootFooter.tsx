import type React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import "../../styles/components.scss";

const RootFooter: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="root-footer" id="links">
			<div className="root-footer-container">
				<div className="footer-main">
					<div className="footer-left-column">
						<FooterBrand />
					</div>

					<div className="footer-right-column">
						<FooterLinks />
					</div>
				</div>
				<div className="footer-copyright">
					© {currentYear} Prasidh P Shetty. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default RootFooter;
