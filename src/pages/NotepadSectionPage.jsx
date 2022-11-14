import { useState} from "react";


export const NotepadSectionPage =() => {

	const [inHover, setHover] = useState([
		{ name: "1", active: false },
		{ name: "2", active: false },
		{ name: "3", active: false },
		{ name: "4", active: false },
		{ name: "5", active: false },
		{ name: "6", active: true },
		{ name: "7", active: false },
		{ name: "8", active: false },
		{ name: "9", active: false },
		{ name: "10", active: true }
	]);

	const toggleHover = (idx) => {
		setHover((inHover) =>
			inHover.map((obj, i) => {
				if (i === idx) {
					let active = true;
					obj.active ? active = false: active = true;
					return {...obj, active}
				}
				return obj;
			})
		);
	};


	return <div>
		<h2>NotepadSectionPage</h2>
		{inHover.map((item, idx) => (
			<div
				onMouseEnter={() => toggleHover(idx)}
				onMouseLeave={() => toggleHover(idx)}
				key={item.name}
			>
				Hover {item.name} over me!
				{item.active && <div>Hi {item.name}</div>}
			</div>
		))}


	</div>

}