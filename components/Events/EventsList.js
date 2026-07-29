import EventsItem from "@/components/Events/EventsItem";
import Title from "@/ui/Title/Title";

const EventsList = ({ events }) => {
	return (
		<div className="events-list">
			<Title title="Праздники и мероприятия" description="Превращаем каждый праздник в приключение." color="text-yellow-700" />
			<div className="events-list__heading">В нашем центре каждый праздник становится ярким событием. Мы организуем мероприятия для детей любого возраста: от уютных утренников и дней рождения до масштабных шоу-программ, выпускных и новогодних праздников.</div>
			<div className="events-grid">
				{events && events.map(({ title, description, image }, id) => (
					<EventsItem key={id} title={title} description={description} image={image} />
				))}
			</div>
		</div>
	);
}

export default EventsList;