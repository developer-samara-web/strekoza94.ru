import "./Header.css";

import Image from "next/image";
import Navbar from "@/components/ui/Navbar/Navbar";
import Button from "@/ui/Button/Button";
import NavbarMobile from "@/ui/Navbar/NavbarMobile";
import Section from "@/ui/Section/Section";

const Header = () => {

	const navbar = [
		{
			title: "Мероприятия",
			href: "#"
		},
		{
			title: "Услуги и цены",
			href: "#"
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
	]

	const contacts = {
		address: "Грабцевское шоссе, 68",
		phone: "+7 (920) 616-02-65",
		buttonName: "Позвонить",
		buttonPhone: "tel:+79991234567"
	}

	return (
		<Section className="header">
			<div className="header__inner">
				<div className="header__row">
					<Image src="/images/logo.png" width={160} height={100} loading="eager" alt="logo" />
					<div className="header__content">
						<span className="header__address">{contacts.address}</span>
						<span className="header__phone">{contacts.phone}</span>
					</div>
				</div>
			</div>
			<div className="header__inner">
				<div className="header__row header__row--bottom">
					<NavbarMobile navbar={navbar} />
					<Navbar navbar={navbar} />
					<div className="header__content">
						<Button type="link" className="button button-sm button-primary" url={contacts.buttonPhone} text="Позвонить" />
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Header;