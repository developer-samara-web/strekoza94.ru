import ContactsItem from "@/components/Contacts/ContactsItem";

export default function ContactsList({ items }) {
	return (
		<div className="contacts__items">
			{items && items.map((item, id) => (
				<ContactsItem key={id} {...item} />
			))}
		</div>
	);
}