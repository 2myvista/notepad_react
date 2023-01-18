import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { CurrentContext } from "../context/ContextProvider";
import {BiCopy} from "react-icons/bi";
import {AiOutlineCheck} from "react-icons/ai";
import axios from "../api/getData";


import copy from "copy-to-clipboard";


export const NotepadItemPage = () => {

	const { url } = useParams();
	const navigate = useNavigate();
	const {currentSection,setCurSection} = useContext(CurrentContext);
	//const {currentItem, setCurItem} = useContext(CurrentContext);
	const {itemsList} = useContext(CurrentContext);
	//const {isSelected, setSelected} = useContext(CurrentContext);
	const [isSelected, setSelected] = useState(false );
	const [isCopied, setCopied] = useState(false );

	const {getFormatedText} = useContext(CurrentContext);
	//setSelected(false);
	//const [selectedText, setSelectedText] = useContext(CurrentContext);

	const handleTextSelect = ()=> {
		if (`${window.getSelection()}`) {
			//console.log(`Selected text: ${window.getSelection().toString()}`);
			setSelected(`${window.getSelection().toString()}`);
		}
		else {
			//console.log(`UnSelected text: ${window.getSelection().toString()}`);
			setSelected(false);
		}
	}
	const handleTextCopy =(text) => {
		copy(text);
		setSelected(false);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	}

	const handleSectionSelect =(section) => {
		setCurSection(section['currentSection']);
		navigate(`/section/${section['currentSection']}`);
	}

	const handleGetSection =(section) => {
		console.log(section);
		const fetchData = async () => {
			try {
				const response = await Promise.all([
					axios.get("/",{
						params: {section: section}
					})
					])
				console.log(response);
			}
			catch (err) {
				console.log(err);
			}

		}
		fetchData();
	}

	useEffect(()=> {

	},[url])

	return (
		<div>
			{isSelected ? <BiCopy title="копировать выделенный текст"  onClick={()=>handleTextCopy(isSelected)}  style={{float: "right", cursor: 'pointer'}}/>:''}
			{isCopied ? <AiOutlineCheck title="скопировано"  style={{float: "right"}}/>:''}
			<div>
				{itemsList.map((item, index) => {
					if (item.code === url) {
						return <div key={index} >
							<h3>{item.name}</h3>
							<div onMouseUp={()=>handleTextSelect()}>{getFormatedText(item.content)}</div>
						</div>
					}
				})}
			</div>
			<hr/>
			<div className="row">
				<div className="col-1">
					<button className="btn btn-secondary col-mr-1" onClick={()=> handleSectionSelect({currentSection})} style={{ cursor: "pointer" }}> {currentSection}</button>
				</div>
				<div className="col-11">
					<button className="btn btn-secondary" onClick={()=> handleGetSection(currentSection)} style={{ cursor: "pointer" }}> получить данные</button>
				</div>

			</div>


		</div>
	);
}