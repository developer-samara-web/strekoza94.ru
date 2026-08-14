import "@/components/Pricing/Pricing.css";

import Title from "@/ui/Title/Title";
import Section from "@/ui/Section/Section";
import PricingList from "@/components/Pricing/PricingList";

const Pricing = () => {

	const { header, items } = {
		header: {
			title: 'Абонементы',
			description: 'Выберите удобный формат посещения',
			text: 'Выберите подходящий вариант для вашей семьи: познакомьтесь с центром на пробном посещении, оформите абонемент или доверьте нам организацию яркого детского праздника.',
			background: 'bg-[#7d6adb]',
			color: 'text-[#7d6adb]',
		},
		items: [
			{
				name: 'Пробный день',
				description: 'Познакомьтесь с центром',
				price: '0 ₽',
				features: [
					'Первое посещение совершенно бесплатно',
					'Доступ ко всем игровым зонам',
					'Знакомство с атмосферой центра',
					'Никаких обязательств',
				],
				button: {
					text: 'Записаться бесплатно',
					url: '#',
				},
			},
			{
				name: 'На месяц',
				description: 'Свобода посещений',
				price: '14 990 ₽',
				features: [
					'Неограниченное количество посещений',
					'Все игровые зоны в вашем распоряжении',
					'Участие в тематических мероприятиях*',
					'Выгоднее разовых посещений',
				],
				button: {
					text: 'Оформить абонемент',
					url: '#',
				},
			},
			{
				name: 'Мероприятие',
				description: 'Праздник под ключ',
				price: '7 900 ₽',
				features: [
					'Праздник по вашему сценарию',
					'Аниматоры и любимые герои',
					'Яркие шоу и увлекательные развлечения',
					'Комфортное пространство для родителей',
				],
				button: {
					text: 'Забронировать праздник',
					url: '#',
				},
			},
		],
	}

	return (
		<Section id="price" className="price">
			<div className="price__inner">
				<div className="price__title">
					<Title title={header.title} description={header.description} background={header.background} color={header.color} />
					<div className="price__description">{header.text}</div>
				</div>
				<PricingList items={items} />
			</div>
		</Section>
	);
}

export default Pricing;