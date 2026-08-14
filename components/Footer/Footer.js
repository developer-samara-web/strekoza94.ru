import "@/components/Footer/Footer.css";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const { info, socials, links } = {
		info: {
			name: "Стрекоза",
			logo: "/images/logo.png",
			description: "Сделайте обучение детей увлекательным и интерактивным с помощью интересных уроков, игр и творческих занятий.",
			copyright: "Copyright © 2018-2025 «Стрекоза»"
		},
		socials: [
			{
				name: "Instagram",
				image: "/images/footer/instagram.png",
				url: "/"
			},
			{
				name: "Vkontakte",
				image: "/images/footer/vkontakte.png",
				url: "/"
			},
			{
				name: "Telegram",
				image: "/images/footer/telegram.png",
				url: "/"
			}
		],
		links: [
			{
				name: "Политика конфиденциальности",
				url: "/"
			},
			{
				name: "Пользовательское соглашение",
				url: "/"
			}
		]
	}

	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__info">
					<Image className="footer__logo" src={info.logo} width={208} height={40} alt={info.name} loading="eager" />
					<p className="footer__description">{info.description}</p>
				</div>

				<div className="footer__content">
					<ul className="footer__socials">
						{socials && socials.map(({ name, image, url }, id) => (
							<Link key={id} href={url} className="footer__social">
								<Image src={image} width={100} height={100} alt={name} />
							</Link>
						))}
					</ul>

					<div className="footer__links">
						{links && links.map(({ name, url }, id) => (
							<Link key={id} href={url} className="footer__link">{name}</Link>
						))}
					</div>

					<span className="footer__copyright">
						{info.copyright}
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;