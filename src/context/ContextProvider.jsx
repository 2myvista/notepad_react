import {createContext, useState, useEffect} from "react"

export const CurrentContext = createContext();

export const CurrentContextProvider = (props) => {
//
	const [currentSection, setCurrentSection] = useState(
		localStorage.getItem("currentSection")?.split(",") || ["all"]
	);

	useEffect(()=> {
		localStorage.setItem("currentSection", currentSection)
	},[currentSection])

	const setCurSection = (section) => {
		// установим выдранный раздел текущим
		//console.log(section.toLowerCase());
		setCurrentSection( [section]);
	}
	/*
	const deleteStock = (stock) => {
		setWatchList(watchList.filter((el) => {
			// если теккщий не равняется удаляемому, возвращаем его,
			return el !== stock;

		}))

	}
	*/


	return <CurrentContext.Provider value={{currentSection, setCurSection}}>
		{/*говорим, все пропсы должны быть видимы внутри всех вызываемых компонентов*/}
		{props.children}
	</CurrentContext.Provider>

}
