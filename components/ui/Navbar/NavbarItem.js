import Link from "next/link";

export default function NavbarItem({ title, href }) {
	return (
		<Link className="navbar__item" href={href}>
			{title}
		</Link>
	);
}