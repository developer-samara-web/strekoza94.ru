import "./Title.css";

const Title = ({ children, title, description }) => {
	return (
		<>
			<div className="section-title">
				<div className="section-title__label">{title}</div>
				<div className="section-title__heading">{description}</div>
			</div>

			{children}
		</>
	);
}

export default Title;