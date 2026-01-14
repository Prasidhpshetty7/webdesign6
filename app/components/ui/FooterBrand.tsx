import type React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const FooterBrand: React.FC = () => {
	return (
		<div className="footer-section brand-section">
			<h3 className="footer-brand">PRASIDH P SHETTY</h3>
			<p className="footer-tagline">Web Designer & Full-Stack Developer</p>
			<p className="footer-description">
				Passionate about building modern, visually engaging, and user-focused digital experiences.
			</p>
			<div className="footer-location">
				<FaMapMarkerAlt />
				<span>Mangalore, India</span>
			</div>
		</div>
	);
};

export default FooterBrand;
