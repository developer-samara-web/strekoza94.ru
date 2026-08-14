import EventsItem from "@/components/Events/EventsItem";
import Title from "@/ui/Title/Title";

const EventsList = ({ header, items }) => {
	const { title, description, text, background, color } = header ?? {};
	
	return (
		<div className="events-list">
			<Title title={title} description={description} background={background} color={color} />
			<div className="events-list__heading">{text}</div>
			<div className="events-grid">
				{items && items.map(({ title, description, image }, id) => (
					<EventsItem key={id} title={title} description={description} image={image} />
				))}
			</div>
		</div>
	);
}

export default EventsList;