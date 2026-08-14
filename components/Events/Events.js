import "./Events.css";

import Section from "@/ui/Section/Section";
import EventsList from "@/components/Events/EventsList";

const Events = () => {

	const { header, items } = {
		header: {
			title: "Праздники и мероприятия",
			description: "Превращаем каждый праздник в приключение",
			text: "В нашем центре каждый праздник становится ярким событием. Мы организуем мероприятия для детей любого возраста: от уютных утренников и дней рождения до масштабных шоу-программ, выпускных и новогодних праздников",
			background: "bg-[#d18e00]",
			color: "text-[#d18e00]"
		},
		items: [
			{
				title: 'Утренники',
				description: 'Весёлые тематические утренники с играми, творчеством и праздничной атмосферой для каждого ребёнка.',
				image: '/images/events/events-item-1.png'
			},
			{
				title: 'День рождения',
				description: 'Незабываемый день рождения с любимыми героями, шоу-программой и яркими эмоциями.',
				image: '/images/events/events-item-2.png'
			},
			{
				title: 'Новый год',
				description: 'Волшебный новогодний праздник с Дедом Морозом, Снегурочкой, играми и подарками.',
				image: '/images/events/events-item-3.png'
			},
			{
				title: 'Выпускной',
				description: 'Трогательный и яркий выпускной с конкурсами, танцами, фотозоной и праздничной программой.',
				image: '/images/events/events-item-4.png'
			},
			{
				title: 'Мастер-классы',
				description: 'Увлекательные творческие мастер-классы, где дети создают поделки и раскрывают свои таланты.',
				image: '/images/events/events-item-5.png'
			},
			{
				title: 'Шоу-программы',
				description: 'Захватывающие научные, мыльные, бумажные и другие шоу, которые подарят детям море впечатлений.',
				image: '/images/events/events-item-6.png'
			}
		]
	}

	return (
		<Section id="events" className="events">
			<EventsList header={header} items={items} />
		</Section>
	);
}

export default Events;