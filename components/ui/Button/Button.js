import "./Button.css";
import Link from "next/link";

const Button = ({ type, className, text, url, icon, iconPosition = 'right', }) => {
	const content = (
		<>
			{icon && iconPosition === 'left' && icon}
			{text}
			{icon && iconPosition === 'right' && icon}
		</>
	);

	if (type === 'link') {
		return (
			<Link href={url} className={className}>
				{content}
			</Link>
		);
	}

	return (
		<button className={className}>
			{content}
		</button>
	);
};

export default Button;