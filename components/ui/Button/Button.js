'use client'

import "./Button.css";
import Link from "next/link";

import { useModal } from '@/components/Modal/ModalProvider';

const Button = ({ type, className, text, url, icon, iconPosition = 'right', service }) => {
	const { openModal } = useModal()

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

	if (type === 'modal') {
		return (
			<button onClick={() => openModal(service)} className={className}>
				{content}
			</button>
		);
	}

	return (
		<button className={className}>
			{content}
		</button>
	);
};

export default Button;