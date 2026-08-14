import Image from "next/image";

const AboutItem = ({ title, description, color, background, border, image }) => {
	return (
		<div className="about__item" style={{ backgroundColor: background, borderColor: border, color: color }}>
			<div className="about-item__image">
				<Image className="about-item__picture" src={image} width={160} height={160} alt={title} loading="eager" />
			</div>
			<div className="about-item__content">
				<h3 className={`about-item__title ${color}`}>{title}</h3>
				<div className="about-item__description">{description}</div>
			</div>
		</div>
	);
}

export default AboutItem;