import {useContext} from "react";
import { CurrentContext } from "../context/ContextProvider";
export const SectionList = () => {
	const {currentSection, setCurSection} = useContext(CurrentContext);
	const CurrentSectionList = [{"name": "Linux"}, {"name":"Git"}, {"name":"Ssh"}]
	const listSections = CurrentSectionList.map((item, index) =>

			<button type="button" key={item.name} className={`btn round-lg ${item.name == currentSection ? 'active' : ''}`} onClick={(e)=>{
				setCurSection(e.target.name);
			}}  name={item.name}>{item.name}</button>);
	return <div className="sectionsList">
		<h3>sectionsList</h3>

		<div className="d-grid gap-2 ">
			{listSections}
		</div>
	</div>
}