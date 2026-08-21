import Button from "@/ui/Button/Button";
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

export default function PricingItem({ name, description, price, features, button }) {
	return (
		<div className="price__item">
			<div className="price-name">
				<h3 className="text-2xl font-medium text-center">{name}</h3>
				<div className="text-center">{description}</div>
			</div>
			<span className="price__value">{price}</span>
			<ul className="price__features ">
				{features.map((text, id) => (
					<li key={id} className="price__feature">
						<CheckBadgeIcon className="size-6 text-[#008f3f]" />
						{text}
					</li>
				))}
			</ul>
			<Button type="modal"
				className="button button-md button-primary w-full text-center"
				url={button.url}
				text={button.text}
				service={button.service}
			/>
		</div>
	);
}