import {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {CurrentContext} from "../context/ContextProvider";
export const Header =() => {
	const navigate = useNavigate();
	const {currentSection, setCurSection} = useContext(CurrentContext);
//	const {employees, selectedTeam} = useContext(DataContext);
//	const teamMemberCount=employees.filter((employee)=>employee.teamName==selectedTeam).length;

	const handleHeaderSelect= ()  => {
		setCurSection('none');
		navigate(`/`);
	}
	return (
		<header className="row">
				<div className="col-3">
					<h1 className="text-center"  style={{ cursor: "pointer" }} onClick={()=> handleHeaderSelect()}>Faq</h1>
				</div>
				<div className="col-9 ml-3"></div>

		</header>
	)
}
