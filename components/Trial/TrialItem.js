import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const TrialItem = ({ title }) => {
	return (
		<li className="trial-list__item">
			<CheckBadgeIcon className="trial-list__icon" />
			<span className="pb-px">{title}</span>
		</li>
	);
}

export default TrialItem;