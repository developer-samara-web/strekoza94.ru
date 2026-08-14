import AboutItem from "@/components/About/AboutItem";

const AboutList = ({ abouts }) => {
	return (
		<div className="about__list">
			{abouts && abouts.map(({ title, description, color, background, border, image }, id) => (
				<AboutItem key={id} title={title} description={description} color={color} background={background} border={border} image={image} />
			))}
		</div>
	);
}

export default AboutList;