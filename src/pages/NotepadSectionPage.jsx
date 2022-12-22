import { useState, useEffect,  useContext} from "react";
import { CurrentContext } from "../context/ContextProvider";
//import {useContext} from "react";

export const NotepadSectionPage =() => {

	const {currentSection} = useContext(CurrentContext);
	const {itemsList} = useContext(CurrentContext);
	const [filteredArray, setFilteredArray] = useState(itemsList);

	useEffect(() => {
		setFilteredArray((_) => {
			const listSectionArray = itemsList.filter(item => item.section == currentSection);
			return listSectionArray;
		});
	}, [currentSection]);

	const listItems = filteredArray.map((item) =>
		<div  className="row wrapper" key={item.key}>

			<div data-value={item.key} className={`col-12 text-nowrap text-break`}>{item.name}</div>
			<div  className="col-12 text-break" style={{   border: '1px solid lightgray' }}> {item.content}</div>
		</div >

	);



	return <>
		<div>
			<h3>{currentSection}</h3>
			{listItems}
		</div>
	</>

}