"use client";

import { useState } from "react";
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const QuestionsList = ({ list }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const toggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="flex flex-col gap-2">
			{list.map((faq, index) => {
				const isOpen = activeIndex === index;

				return (
					<div key={index} className="questions__item border border-slate-200 px-5 rounded-2xl">
						<button onClick={() => toggle(index)} className="questions__button flex w-full items-center justify-between py-3 text-left font-semibold" >
							<span>{faq.question}</span>
							<PlusCircleIcon className={`size-8 text-[#ff3d6e] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
						</button>

						<div className={`grid overflow-hidden text-gray-600 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
							<div className="overflow-hidden">
								<p className="pb-4">{faq.answer}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default QuestionsList;