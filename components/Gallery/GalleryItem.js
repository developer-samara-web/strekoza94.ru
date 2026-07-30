import Image from "next/image";

const GalleryItem = ({ image }) => {
	return (
		<li className="gallery__item">
			<Image className="gallery__image" src={image} width={600} height={900} alt="" />
		</li>
	);
}

export default GalleryItem;