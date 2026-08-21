import "./Trial.css";

import Image from "next/image";
import Button from "@/ui/Button/Button";
import TrialList from "@/components/Trial/TrialList";
import Section from "@/ui/Section/Section";
import { GiftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

const Trial = () => {

	const { header, items, buttons } = {
		header: {
			title: "Первый день — бесплатно!",
			description: "Подарите ребёнку возможность познакомиться с нашим центром без оплаты. Игры, новые впечатления и уютная атмосфера ждут вас!"
		},
		items: [
			{
				title: "Бесплатное пробное посещение"
			},
			{
				title: "Без обязательств и скрытых условий"
			},
			{
				title: "Без обязательств и скрытых условий"
			},
			{
				title: "Комфорт для детей и родителей"
			},
			{
				title: "Весёлые игры и новые знакомства"
			}
		],
		buttons: [
			{
				type: 'modal',
				title: "Записаться бесплатно",
				className: "button button-md button-primary",
				icon: <GiftIcon className="size-4" />,
				iconPosition: "left",
				service: "Знакомство с клубом"
			},
			{
				type: 'link',
				title: "Продолжить знакомство",
				className: "button button-md button-secondary",
				icon: <ArrowLongRightIcon className="size-5" />,
				iconPosition: "right",
				url: "#gallery"
			}
		]
	}

	return (
		<Section id="trial" className="trial">
			<div className="trial__row">
				<div className="trial__images">
					<Image className="trial__image" src="/images/trial/trial-section.png" width={600} height={500} alt={header.title} />
				</div>
				<div className="trial__inner">
					<div className="trial__text">
						<div className="trial__title">{header.title}</div>
						<div className="trial__description">{header.description}</div>
					</div>
					<TrialList list={items} />
					<div className="trial__actions">
						{buttons && buttons.map(({ title, className, url, icon, type, service, iconPosition }, id) => (
							<Button key={id} type={type} className={className} icon={icon} iconPosition={iconPosition} url={url} text={title} service={service} />
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Trial;