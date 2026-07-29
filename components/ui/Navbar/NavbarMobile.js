"use client";

import { useState } from "react";
import NavbarItem from "@/ui/Navbar/NavbarItem";
import { Bars2Icon } from '@heroicons/react/24/solid';

const NavbarMobile = ({ navbar }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button className="navbar-mobile__button" onClick={() => setOpen(!open)} >
				<Bars2Icon className="size-4" />
			</button>

			{open && (
				<nav className="navbar-mobile">
					{navbar.map((item, id) => (
						<NavbarItem
							key={id}
							{...item}
						/>
					))}
				</nav>
			)}
		</>
	);
}

export default NavbarMobile;