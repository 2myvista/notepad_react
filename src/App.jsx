import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NotepadOverviewPage} from "./pages/NotepadOverviewPage"
import {NotepadSectionPage} from "./pages/NotepadSectionPage"
import {NotepadItemPage} from "./pages/NotepadItemPage"
import {SectionList} from "./components/sectionList";
import {CurrentContextProvider} from "./context/ContextProvider";

export default  function App () {
	return (
		<main className="container .container-fluid ">
			<header className="text-center"><a href="/" title="на главную" className="text-dark">notepad</a></header>
			<CurrentContextProvider>
			<div className="row">
				{<BrowserRouter>
				<div className="col-sm-3 h-100"><SectionList/></div>
				<div className="col-sm-9">
					<h1></h1>
						<Routes>
							<Route path="/" element={<NotepadOverviewPage/>} />
							<Route path="/section/:url" element={<NotepadSectionPage/>}/>
							<Route path="/item/:url" element={<NotepadItemPage/>}/>
						</Routes>
				</div>
				</BrowserRouter>}
			</div>
			</CurrentContextProvider>
			<footer className="mt-2 text-end">&copy; {new Date().getFullYear()} </footer>
		</main>
	);
};
