import { useState, useEffect,  useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CurrentContext } from "../context/ContextProvider";

export const NotepadSectionPage =() => {

	const navigate = useNavigate();
	const {currentSection, setCurSection} = useContext(CurrentContext);
	const {setCurItem} = useContext(CurrentContext);
	const {itemsList} = useContext(CurrentContext);
	const [filteredArray, setFilteredArray] = useState(itemsList);

	const {getFormatedText} = useContext(CurrentContext);

	const handleItemSelect= (item)  => {
		setCurSection(item.section);
		setCurItem(item);
		navigate(`/item/${item.code}`)
	}

	useEffect(() => {
		setFilteredArray((_) => {
			const listSectionArray = itemsList.filter(item => item.section === currentSection);
			return listSectionArray;
		});
	}, [currentSection]);

	const listItems = filteredArray.map((item) =>
		<div className="row wrapper mb-2" key={item.key}>

			<div onClick={()=> handleItemSelect(item)} className="col-12 text-nowrap text-break pb-1 fw-bolder" style={{ cursor: "pointer" }}>{item.name}</div>
			<div className="col-12 text-break" style={{   border: '1px solid lightgray' }}> {getFormatedText(item.content)}</div>
		</div>
	);

	return <>
		<div>
			<h3>{currentSection}</h3>
			{listItems}
		</div>
	</>

}