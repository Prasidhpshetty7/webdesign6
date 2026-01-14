import type React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe, FaTelegram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterLinks: React.FC = () => {
	return (
		<div className="footer-section links-section">
			<h4 className="footer-title">LINKS</h4>
			<div className="footer-links-list">
				<a
					href="https://github.com/Prasidhpshetty7"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaGithub className="link-icon" />
					<span className="link-text">GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/prasidh-shetty7/"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaLinkedin className="link-icon" />
					<span className="link-text">LinkedIn</span>
				</a>
				<a
					href="https://www.instagram.com/mr__shxtty/"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaInstagram className="link-icon" />
					<span className="link-text">Instagram</span>
				</a>
				<a
					href="https://x.com/ShettyPrasidh7"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaXTwitter className="link-icon" />
					<span className="link-text">X (Twitter)</span>
				</a>
				<a
					href="https://t.me/FINALSKULL"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaTelegram className="link-icon" />
					<span className="link-text">Telegram</span>
				</a>
				<a
					href="https://discord.com/users/prasidhshetty"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaDiscord className="link-icon" />
					<span className="link-text">Discord</span>
				</a>
				<a
					href="https://prasidhshetty.in"
					target="_blank"
					rel="noreferrer"
					className="footer-link-item"
				>
					<FaGlobe className="link-icon" />
					<span className="link-text">Portfolio</span>
				</a>
			</div>
		</div>
	);
};

export default FooterLinks;
