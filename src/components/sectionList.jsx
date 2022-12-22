import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import { CurrentContext } from "../context/ContextProvider";
export const SectionList = () => {
	const {currentSection, setCurSection} = useContext(CurrentContext);
	const {sectionsList, setSectionsList} = useContext(CurrentContext);

	const navigate = useNavigate();

	const handleSectionSelect =(section) => {
		setCurSection(section);
		navigate(`section/${section}`);
	}

	const listSections = sectionsList.map((item, index) =>
			<button type="button" key={item} className={`btn round-lg ${item == currentSection ? 'active' : ''}`} onClick={(e)=>{handleSectionSelect(e.target.name);}}  name={item}>{item}</button>);
	return <div className="sectionsList">
		<h3>sectionsList</h3>
		<div className="d-grid gap-2 ">
			{listSections}
		</div>
	</div>
}