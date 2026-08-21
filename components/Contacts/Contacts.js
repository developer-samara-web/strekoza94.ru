import "@/components/Contacts/Contacts.css";

import Image from "next/image";
import Section from "@/ui/Section/Section";
import ContactsList from "@/components/Contacts/ContactsList";
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

export default function Contacts() {
	const { header, items } = {
		header: {
			title: "Контакты",
			description: "Связь с нами",
			text: "Будем рады видеть вас в «Стрекозе»! Если у вас есть вопросы о праздниках, посещении или наших услугах — свяжитесь с нами удобным способом.",
			background: "bg-[#6dade5]",
			color: "text-[#6dade5]"
		},
		items: [
			{
				title: "Адрес:",
				description: "Грабцевское шоссе, 68",
				icon: <MapPinIcon className="size-6" />,
				style: "contacts__icon--blue"
			},
			{
				title: "Почта:",
				description: "strekoza.kaluga@mail.ru",
				icon: <EnvelopeIcon className="size-6" />,
				style: "contacts__icon--orange"
			},
			{
				title: "Телефон:",
				description: "+7 (920) 616-02-65",
				icon: <PhoneIcon className="size-6" />,
				style: "contacts__icon--green"
			},
			{
				title: "Режим работы:",
				description: "Ежедневно с 10:00 до 20:00",
				icon: <ClockIcon className="size-6" />,
				style: "contacts__icon--red"
			},
			{
				title: "Телеграм:",
				description: "strekoza94",
				icon: <ChatBubbleLeftEllipsisIcon className="size-6" />,
				style: "contacts__icon--violet"
			}
		]
	}

	return (
		<Section className="contacts" header={header}>
			<div className="contacts__inner">
				<div className="contacts__image">
					<Image className="contacts__picture" src="/images/contacts/element-map.webp" width={910} height={380} loading="eager" alt="" />
				</div>
				<ContactsList items={items} />
			</div>
		</Section>
	);
}