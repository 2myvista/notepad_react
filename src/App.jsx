//import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NotepadOverviewPage} from "./pages/NotepadOverviewPage"
import {NotepadSectionPage} from "./pages/NotepadSectionPage"
import {SectionList} from "./components/sectionList";
import {CurrentContextProvider} from "./context/ContextProvider";

export default  function App () {
	return (
		<main className="container .container-fluid h-100">
			<CurrentContextProvider>
			<div className="row">
				<div className="col-sm-3 h-100"><SectionList/></div>
				<div className="col-sm-9">
					<h1>notepad react</h1>
					<NotepadOverviewPage/></div>
			</div>
				<div>
					<NotepadSectionPage/>
				</div>
			{/*<BrowserRouter>
			<Routes>

				<Route path="/section/:url" element={<NotepadSectionPage/>}/>
			</Routes>
			</BrowserRouter>*/}
			</CurrentContextProvider>
		</main>
	);
};
