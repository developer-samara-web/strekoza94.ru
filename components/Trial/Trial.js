import "./Trial.css";

import Image from "next/image";
import Button from "@/ui/Button/Button";
import TrialList from "@/components/Trial/TrialList";

const Trial = () => {

	const { title, description } = {
		title: "Первый день — бесплатно!",
		description: "Подарите ребёнку возможность познакомиться с нашим центром без оплаты. Игры, новые впечатления и уютная атмосфера ждут вас!"
	}

	const list = [
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
	]

	const actions = [
		{
			title: "Записаться бесплатно",
			className: "button button-md button-primary",
			url: "#"
		},
		{
			title: "Продолжить знакомство",
			className: "button button-md button-secondary",
			url: "#"
		}
	]

	return (
		<section className="trial">
			<div className="trial__row">
				<Image className="trial__image" src="/images/trial/trial-section.png" width={600} height={500} alt="" />
				<div className="trial__inner">
					<div className="trial__text">
						<div className="trial__title">{title}</div>
						<div className="trial__description">{description}</div>
					</div>
					<TrialList list={list} />
					<div className="trial_actions">
						{actions && actions.map(({ title, className, url }, id) => (
							<Button key={id} type="link" className={className} url={url} text={title} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Trial;