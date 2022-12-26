import {useContext, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { CurrentContext } from "../context/ContextProvider";

export const NotepadItemPage = () => {

	const { url } = useParams();
	const navigate = useNavigate();
	const {currentSection,setCurSection} = useContext(CurrentContext);
	//const {currentItem, setCurItem} = useContext(CurrentContext);
	const {itemsList} = useContext(CurrentContext);

	const {getFormatedText} = useContext(CurrentContext);

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
			<div>
				{itemsList.map((item, index) => {
					if (item.code === url) {
						return <div key={index} >
							<h3>{item.name}</h3>

							<div>{getFormatedText(item.content)}</div>
						</div>


					}
				})}
			</div>
			<hr/>
			<button className="btn btn-secondary" onClick={()=> handleSectionSelect({currentSection})} style={{ cursor: "pointer" }}> {currentSection}</button>
		</div>
	);
}