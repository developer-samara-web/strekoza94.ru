import "./Navbar.css";
import NavbarItem from "@/components/ui/Navbar/NavbarItem";

export default function Navbar({ navbar }) {
	return (
		<nav className="navbar">
			{navbar && navbar.map((item, id) => (
				<NavbarItem key={id} {...item} />
			))}
		</nav>
	);
}