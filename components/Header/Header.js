import "./Header.css";

import Image from "next/image";
import Section from "@/ui/Section/Section";
import Button from "@/ui/Button/Button";
import Navbar from "@/components/ui/Navbar/Navbar";
import NavbarMobile from "@/ui/Navbar/NavbarMobile";
import { PhoneIcon } from '@heroicons/react/24/solid';

const Header = () => {

	const { menu, contacts, button } = {
		menu: [
			{
				title: "Мероприятия",
				href: "#events"
			},
			{
				title: "Услуги и цены",
				href: "#price"
			},
			{
				title: "Галерея",
				href: "#"
			},
			{
				title: "Вопросы и ответы",
				href: "#"
			},
			{
				title: "Контакты",
				href: "#"
			},
		],
		contacts: {
			address: "Грабцевское шоссе, 68",
			phone: "+7 (920) 616-02-65",
		},
		button: {
			name: "Позвонить",
			phone: "tel:+79991234567",
			icon: <PhoneIcon className="size-3" />
		}
	}

	return (
		<Section className="header">
			<div className="header__inner">
				<div className="header__row">
					<Image className="header__logo" src="/images/logo.webp" width={208} height={40} loading="eager" alt="logo" />
					<div className="header__content">
						<span className="header__address">{contacts.address}</span>
						<span className="header__phone">{contacts.phone}</span>
					</div>
				</div>
			</div>
			<div className="header__inner">
				<div className="header__row header__row--bottom">
					<NavbarMobile navbar={menu} />
					<Navbar navbar={menu} />
					<div className="header__content">
						<Button
							type="link"
							className="button button-sm button-primary"
							url={button.phone}
							icon={button.icon}
							iconPosition="left"
							text={button.name}
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Header;