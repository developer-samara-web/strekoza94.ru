import './Hero.css';

import Image from "next/image";
import Button from '@/ui/Button/Button';

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__inner">
				<div className="hero__title">Учитесь и развивайтесь -<br></br> каждый день!</div>
				<div className="hero__description">Сделайте обучение детей увлекательным и интерактивным с помощью интересных уроков,<br></br>игр и творческих занятий.</div>
				<Button type="link" className="button button-md" url="#" text="Забронировать праздник" />
			</div>
			<Image className="hero__image" src="/images/hero/hero.png" width="1400" height="500" alt="hero" />
		</section>
	);
}

export default Hero;