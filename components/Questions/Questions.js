import './Questions.css';

import Image from "next/image";
import Section from "@/ui/Section/Section";
import QuestionsList from '@/components/Questions/QuestionsList';

const Questions = () => {

	const { header, items } = {
		header: {
			title: "Ответы на вопросы",
			description: "Остались вопросы? Мы подготовили ответы!",
			background: "bg-[#ff3d6e]",
			color: "text-[#ff3d6e]"
		},
		items: [
			{
				question: "Нужно ли записываться заранее?",
				answer: "Да, мы рекомендуем записываться заранее, чтобы подобрать удобное время и гарантировать наличие свободных мест.",
			},
			{
				question: "Для какого возраста подходит игровой центр?",
				answer: "Наш центр рассчитан на детей от 1 до 8 лет. Для каждого возраста найдутся интересные игры и развлечения.",
			},
			{
				question: "Можно ли отметить день рождения у вас?",
				answer: "Конечно! Мы организуем праздник под ключ: игровая программа, аниматоры, шоу, оформление и уютная зона для родителей.",
			},
			{
				question: "Можно ли родителям находиться вместе с ребёнком?",
				answer: "Да, родители могут находиться рядом с ребёнком и отдыхать в комфортной зоне ожидания.",
			},
			{
				question: "Сколько длится пробный день?",
				answer: "Продолжительность пробного посещения позволяет ребёнку познакомиться с игровой зоной, поиграть и почувствовать атмосферу центра.",
			}
		]
	}

	return (
		<Section id="questions" className="questions" header={header}>
			<div className="questions__inner">
				<Image className="questions__image" src="/images/questions/questions-section.webp" width={1402} height={1122} alt={header.title} />
				<QuestionsList list={items} />
			</div>
		</Section>
	);
}

export default Questions;