import Image from "next/image";

const AboutItem = ({ title, description, color, image }) => {
	return (
		<div className="about__item" style={{ backgroundColor: color }}>
			<div className="about-item__image">
				<Image className="about-item__picture" src={image} width={160} height={160} alt="about" />
			</div>
			<div className="about-item__content">
				<h3 className="about-item__title">{title}</h3>
				<div>{description}</div>
			</div>
		</div>
	);
}

export default AboutItem;