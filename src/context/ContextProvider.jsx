import {createContext, useState, useEffect} from "react"
export const CurrentContext = createContext();

export const CurrentContextProvider = (props) => {

	const itemsList = [
		{ key: '0', section: 'linux', code:'linux_ban_file', name: 'файлы бана', content: `нахождение файлов бана:
		 /var/log/fail2ban.log  cat fail2ban.log | grep Ban` },
		{ key: '1', section: 'linux', code:'linux_ip', name: 'баним IP-адрес', content: "fail2ban-client set ssh banip IP-адрес fail2ban-client nginx banip IP-адрес" },
		{ key: '2', section: 'git', code:'git_ssl', name: 'сборка сертификата', content: "root@ipc2u:~# cat 222423165repl_2.crt \n SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA\.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
		{ key: '3', section: 'git', code:'git_clone', name: 'git clone', content: "возможен вариант, \nкогда присылают только 1 сертификат  для продления BEGIN CERTIFICATE MII .... QxrQ= END CERTIFICATE в таком случае из файла ipc2u.by.crt удалям самый верхний блок ----BEGIN CER\\nTIFICATE-----   ...  ----END CERTIFICATE и заменяем его присланным" },
		{ key: '4', section: 'linux', code:'linux_mysql', name: 'time mysqldump', content: "time mysqldump -uweb -p'_some_pswd' web_ipc2u.ru > web_ipc2u.ru_15022020.sql \n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql" },
		{ key: '5', section: 'ssh', code:'ban', name: 'файлов бана', content: "нахождение файлов бана /var/log/fail2ban.log ---- cat fail2ban.log | grep Ban" },
		{ key: '6', section: 'git', code:'linux_ssl', name: 'ssl сертификаты', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
		{ key: '7', section: 'linux', code:'npm', name: 'установка npm',content : "на площадке после установки \n + npm необходимо удалить два пакета gm  и gmsmith, которые помечены как необязательные " },
		{ key: '8', section: 'pim', code:'pim_curl', name: 'curl',content : "curl -X POST -H \"Сontent-type: application/json\" -d '{\"username\":\"pbk@ipc2u.ru\", \"password\":\"***\"}' dev:***@pim.ipc2u.ru:8001/api/v1/login \n touch -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log777 \n tail -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log  " },
		{ key: '9', section: 'windows', code:'win_prnsсr', name: 'снимок полного экрана',content : "нажатие win + printscreen копирует в буфер снимок всего экрана. Если подключены 2 монитора то копируется первый" },
		{ key: '10', section: 'react', code:'react_default', name: 'вызов функции определения default состояния',content :"let [count, setCount] = useState(()=>{});" },
		{ key: '11', section: 'react', code:'react_base', name: 'react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
		{ key: '12', section: 'хрень', code:'hren', name: 'react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
		{ key: '13', section: 'чушь', code:'hren1', name: 'полная хрень react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
	]
	const getFormatedText = (text) => {
		return text.split('\n').map((str, i) => <p key={`p_${i}`}>{str}</p>)
	}

	const getSectionsName=() => {
		let number = new Set();
		itemsList.forEach(function (item, i, arr) {
			number.add(item.section);
		});
		return Array.from(number).sort();
	}

	const [sectionsList, setSectionsList] = useState(getSectionsName());

	const [currentSection, setCurrentSection] = useState(
		localStorage.getItem("currentSection") || "none"
	);

	const [currentItem, setCurrentItem] = useState(
		localStorage.getItem("currentItem") || "none"
	);

	const setCurSection = (section) => {
		// установим выбранный раздел текущим
		console.log(section.toLowerCase());
		setCurrentSection( section);
	}

	const setCurItem = (item) => {
		// установим выбранный разэлемент текущим
		console.log(item.code);
		setCurrentItem( [item.code]);
	}

	useEffect(()=> {
		localStorage.setItem("currentSection", currentSection)
	},[currentSection])

	useEffect(()=> {
		localStorage.setItem("currentItem", currentItem)
	},[currentItem])



	return <CurrentContext.Provider value={{currentSection, setCurSection, currentItem, setCurItem, sectionsList, itemsList, getFormatedText}}>
		{/*говорим, все пропсы должны быть видимы внутри всех вызываемых компонентов*/}
		{props.children}
	</CurrentContext.Provider>

}
