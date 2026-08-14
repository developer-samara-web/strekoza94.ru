export default function ContactsItem({ title, description, icon, style }) {
	return (
		<div className="contacts__item">
			<div className={`contacts__icon ${style}`}>
				{icon}
			</div>
			<div className="contacts__content">
				<span className="contacts__title">{title}</span>
				<span className="contacts__description">{description}</span>
			</div>
		</div>
	);
}