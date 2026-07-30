import GalleryItem from "@/components/Gallery/GalleryItem";

const GalleryList = ({ list }) => {
	return (
		<ul className="gallery__list">
			{list.map((image, id) => (
				<GalleryItem key={id} image={image} />
			))}
		</ul>
	);
}

export default GalleryList;