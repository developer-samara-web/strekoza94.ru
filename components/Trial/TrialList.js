import TrialItem from "@/components/Trial/TrialItem";

const TrialList = ({ list }) => {
	return (
		<ul className="trial__list">
			{list && list.map(({ title }, id) => (
				<TrialItem key={id} title={title} />
			))}
		</ul>
	);
}

export default TrialList;