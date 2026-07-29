import "./Title.css";

const Title = ({ title, description, color }) => {
	return (
		<>
			<div className="section-title">
				<div className={`section-title__label ${color}`}>{title}</div>
				<div className="section-title__heading">{description}</div>
			</div>
		</>
	);
}

export default Title;