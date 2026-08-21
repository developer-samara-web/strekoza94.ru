import './Hero.css';

import Image from "next/image";
import Button from '@/ui/Button/Button';
import Section from '@/ui/Section/Section';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const Hero = () => {
	const { header, button } = {
		header: {
			title: "Учитесь и развивайтесь - каждый день!",
			description: "Сделайте обучение детей увлекательным и интерактивным с помощью интересных уроков, игр и творческих занятий."
		},
		button: {
			type: "link",
			name: "Узнать больше",
			icon: <ArrowLongRightIcon className="size-5" />,
			url: "#about"
		}
	}

	return (
		<Section header={false} className="hero">
			<div className="hero__inner">
				<div className="hero__title">{header.title}</div>
				<div className="hero__description">{header.description}</div>
				<Button type={button.type} className="button button-md button-primary" url={button.url} text={button.name} icon={button.icon} />
			</div>
			<Image className="hero__image" src="/images/hero/hero.webp" width="1926" height="816" loading="eager" alt="Учитесь и развивайтесь - каждый день!" />
		</Section>
	);
}

export default Hero;