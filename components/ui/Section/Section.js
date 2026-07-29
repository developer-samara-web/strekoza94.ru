import "@/components/ui/Section/Section.css"

const Section = ({ children, className }) => {
	return (
		<section className={className}>
			{children}
		</section>
	);
}

export default Section;