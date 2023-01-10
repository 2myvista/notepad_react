import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { CurrentContext } from "../context/ContextProvider";


export const NotepadItemPage = () => {

	const { url } = useParams();
	const navigate = useNavigate();
	const {currentSection,setCurSection} = useContext(CurrentContext);
	//const {currentItem, setCurItem} = useContext(CurrentContext);
	const {itemsList} = useContext(CurrentContext);
	//const {isSelected, setSelected} = useContext(CurrentContext);
	const [isSelected, setSelected] = useState(false );

	const {getFormatedText} = useContext(CurrentContext);
	//setSelected(false);
//	const [selectedText, setSelectedText] = useContext(CurrentContext);
/*	const handleText=()=>{
		setSelectedText();
	}
*/
	const handleTextSelect = ()=> {
		if (`${window.getSelection()}`) {
			console.log(`Selected text: ${window.getSelection().toString()}`);
			setSelected('888'+`${window.getSelection().toString()}`);
		}
		else {
			console.log(`UnSelected text: ${window.getSelection().toString()}`);
			setSelected(false);
		}
		console.log(isSelected);
	}
	//console.log(itemsList);
	const handleSectionSelect =(section) => {

		console.log(section['currentSection']);
		setCurSection(section['currentSection']);
		navigate(`/section/${section['currentSection']}`);
	}

	useEffect(()=> {

	},[url])

	return (
		<div>
			{isSelected ? <div  className="" style={{   border: '1px solid lightgray' }}> копировать</div>:'***'}
			<div>
				{itemsList.map((item, index) => {
					if (item.code === url) {
						return <div key={index} >
							<h3>{item.name}</h3>
							<div  onMouseUp={()=>handleTextSelect()}>{getFormatedText(item.content)}</div>
						</div>
					}
				})}
			</div>
			<hr/>
			<button className="btn btn-secondary" onClick={()=> handleSectionSelect({currentSection})} style={{ cursor: "pointer" }}> {currentSection}</button>


		</div>
	);
}