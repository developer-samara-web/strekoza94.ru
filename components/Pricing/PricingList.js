import PricingItem from "@/components/Pricing/PricingItem";

export default function PricingList({ items }) {
	return (
		<div className="price__list">
			{items && items.map((item, id) => (
				<PricingItem key={id} {...item} />
			))}
		</div>
	);
}