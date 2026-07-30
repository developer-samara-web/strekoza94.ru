import "./Gallery.css";

import Title from "@/ui/Title/Title";
import Section from "@/ui/Section/Section";
import GalleryList from "@/components/Gallery/GalleryList";

const Gallery = () => {

	const list = [
		"/images/gallery/1.jpg",
		"/images/gallery/2.jpg",
		"/images/gallery/3.jpg",
		"/images/gallery/4.jpg",
		"/images/gallery/5.jpg",
		"/images/gallery/6.jpg",
	];

	return (
		<Section className="gallery">
			<div className="gallery__inner">
				<Title title="Фотогалерея" description="Превращаем каждый праздник в приключение." color="text-[#008f3f]" />
				<div className="gallery__heading">В нашем центре каждый праздник становится ярким событием. Мы организуем мероприятия для детей любого возраста: от уютных утренников и дней рождения до масштабных шоу-программ, выпускных и новогодних праздников.</div>
				<GalleryList list={list} />
			</div>
		</Section>
	);
}

export default Gallery;