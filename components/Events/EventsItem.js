import Image from "next/image";

const EventsItem = ({ title, description, image }) => {
	return (
		<div className="events-item">
			<Image src={image} width={200} height={200} alt={title} />
			<div className="events-item__label">{title}</div>
			<div className="events-item__heading">{description}</div>
		</div>
	);
}

export default EventsItem;