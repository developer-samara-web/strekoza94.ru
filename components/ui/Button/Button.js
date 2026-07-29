import "./Button.css";
import Link from "next/link";

const Button = ({ type, className, text , url}) => {
	if (type === 'link') {
		return (
			<Link href={url} className={className}>
				{text}
			</Link>
		);
	}

	return (
		<button className={className}>
			{text}
		</button>
	);
};

export default Button;