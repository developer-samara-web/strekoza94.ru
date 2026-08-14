import "./Title.css";

const Title = ({ title, description, background, color }) => {
	return (
		<div className="section__title">
			<div className="section-title__label">
				<span className={color}>✦</span>
				<span className={color}>✦</span>
				<span className={color}>✦</span>
				<div className={`section-title__badge ${background}`}>{title}</div>
				<span className={color}>✦</span>
				<span className={color}>✦</span>
				<span className={color}>✦</span>
			</div>
			<div className="section-title__heading">{description}</div>
		</div>
	);
}

export default Title;