import "@/components/ui/Section/Section.css";

import Title from "@/ui/Title/Title";

const Section = ({ id, children, className, header }) => {
	const { title, description, background, color, text } = header ?? {};

	return (
		<section id={id} className={className}>
			{header &&
				<>
					<Title
						title={title}
						description={description}
						background={background}
						color={color}
					/>
					{text && (
						<div className="section__text">
							{text}
						</div>
					)}
				</>
			}

			{children}
		</section>
	);
}

export default Section;