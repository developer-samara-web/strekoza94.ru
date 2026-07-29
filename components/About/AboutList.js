import AboutItem from "@/components/About/AboutItem";

const AboutList = ({ abouts }) => {
	return (
		<div className="about-list">
			{abouts && abouts.map(({ title, description, color, image }, id) => (
				<AboutItem key={id} title={title} description={description} color={color} image={image} />
			))}
		</div>
	);
}

export default AboutList;