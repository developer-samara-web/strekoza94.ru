import "./Gallery.css";

import Section from "@/ui/Section/Section";
import GalleryList from "@/components/Gallery/GalleryList";

const Gallery = () => {

	const { header, items } = {
		header: {
			title: "Фотогалерея",
			description: "Превращаем каждый праздник в приключение",
			text: "В нашем центре каждый праздник становится ярким событием. Мы организуем мероприятия для детей любого возраста: от уютных утренников и дней рождения до масштабных шоу-программ, выпускных и новогодних праздников",
			background: "bg-[#008f3f]",
			color: "text-[#008f3f]"
		},
		items: [
			"/images/gallery/1.jpg",
			"/images/gallery/2.jpg",
			"/images/gallery/3.jpg",
			"/images/gallery/4.jpg",
			"/images/gallery/5.jpg",
			"/images/gallery/6.jpg",
			"/images/gallery/1.jpg",
			"/images/gallery/2.jpg",
			"/images/gallery/3.jpg",
			"/images/gallery/4.jpg",
			"/images/gallery/5.jpg",
			"/images/gallery/6.jpg",
		]
	}

	return (
		<Section id="gallery" className="gallery" header={header}>
			<div className="gallery__inner">
				<GalleryList list={items} />
			</div>
		</Section>
	);
}

export default Gallery;