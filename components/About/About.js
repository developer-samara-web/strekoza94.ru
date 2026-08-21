import "./About.css";

import AboutList from "@/components/About/AboutList";
import Section from "@/ui/Section/Section";

const About = () => {
	const { header, items } = {
		header: {
			title: "Немного о нас",
			description: "Дарим детям улыбки с 2018 года",
			text: "Детский игровой центр 'Стрекоза' предлагает свои услуги по организации праздников для детей от 1 года до 8 лет. Благодаря нашему центру вы сможете провести незабываемый праздник вашему ребёнку в домашней атмосфере.",
			background: "bg-[#6db9e5]",
			color: "text-[#6db9e5]"
		},
		items: [
			{
				title: 'Яркие шоу-программы',
				description: 'Сделайте праздник по-настоящему незабываемым! По вашему желанию мы пригласим аниматоров, клоунов, фокусников или организуем захватывающее шоу: мыльное, бумажное, ленточное, научное и многие другие программы для детей любого возраста.',
				color: 'text-[#7d6adb]',
				background: '#7d6adb0d',
				border: '#7d6adb1a',
				image: '/images/about/1.webp'
			},
			{
				title: 'Творческие развлечения',
				description: 'Помимо активных игр, детей ждут увлекательные творческие занятия. Стол для рисования песком поможет проявить фантазию, а игровая фотосъёмка сохранит самые яркие эмоции и счастливые моменты праздника.',
				color: 'text-[#0280ce]',
				background: '#0280ce0d',
				border: '#0280ce1a',
				image: '/images/about/2.webp'
			},
			{
				title: 'Комфорт для родителей',
				description: 'Пока дети весело проводят время, родители могут отдохнуть в уютной лаунж-зоне. Для вашего комфорта предусмотрены мягкий диван, телевизор, Xbox One и настольные игры — чтобы праздник был приятным для всей семьи.',
				color: 'text-[#008f3f]',
				background: '#008f3f0d',
				border: '#008f3f1a',
				image: '/images/about/3.webp'
			}
		]
	}

	return (
		<Section id="about" className="about" header={header}>
			<AboutList abouts={items} />
		</Section>
	);
}

export default About;