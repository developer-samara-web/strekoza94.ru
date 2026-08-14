import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const TrialItem = ({ title }) => {
	return (
		<li className="trial__list-item">
			<CheckBadgeIcon className="trial__list-icon" />
			<span className="pb-px">{title}</span>
		</li>
	);
}

export default TrialItem;