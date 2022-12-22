import {createContext, useState, useEffect} from "react"
export const CurrentContext = createContext();

export const CurrentContextProvider = (props) => {

	const itemsList = [
		{ key: '0', section: 'linux', code:'linux_ban_file', name: 'файлы бана', content: "нахождение файлов бана /var/log/fail2ban.log  cat fail2ban.log | grep Ban" },
		{ key: '1', section: 'linux', code:'linux_ip', name: 'баним IP-адрес', content: "fail2ban-client set ssh banip IP-адрес fail2ban-client nginx banip IP-адрес" },
		{ key: '2', section: 'git', code:'git_ssl', name: 'сборка сертификата', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
		{ key: '3', section: 'git', code:'git_clone', name: 'git clone', content: "возможен вараиант, когда пнрисылают только 1 сертификат  для продления BEGIN CERTIFICATE MII .... QxrQ= END CERTIFICATE в таком случае из файла ipc2u.by.crt удалям самый верхний блок ----BEGIN CER\\nTIFICATE-----   ...  ----END CERTIFICATE и заменяем его присланным" },
		{ key: '4', section: 'linux', code:'linux_mysql', name: 'time mysqldump', content: "time mysqldump \\n -uweb -pbzYCA3BVY4rfYDyt web_ipc2u.ru > web_ipc2u.ru_15022020.sq \\n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql\\n" },
		{ key: '5', section: 'ssh', code:'ban', name: 'файлов бана', content: "нахождение файлов бана /var/log/fail2ban.log ---- cat fail2ban.log | grep Ban" },
		{ key: '6', section: 'git', code:'linux_ssl', name: 'ssl сертификаты', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
		{ key: '7', section: 'linux', code:'npm', name: 'установка npm',content : "на площадке после установки npm необходимо удалить два пакета gm  и gmsmith, которые у нас помечены как необязатльные " },
		{ key: '8', section: 'pim', code:'pim_curl', name: 'curl',content : "curl -X POST -H \"Content-type: application/json\" -d '{\"username\":\"pbk@ipc2u.ru\", \"password\":\"E9zhD2jKgy01\"}' dev:77ipc@pim.ipc2u.ru:8001/api/v1/login \n" +
				" \n" +
				"touch -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log"+ "\n\r" +
				"tail -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log  " },
		{ key: '9', section: 'windows', code:'win_prnsсr', name: 'снимок полного экрана',content : "нажатие win + printscreen копирует в буфер снимок всего экрана. Если подключены 2 монитора то копируется первый" },
		{ key: '10', section: 'react', code:'react_default', name: 'вызов функции определения default состояния',content :"let [count, setCount] = useState(()=>{});" },
		{ key: '11', section: 'react', code:'react_base', name: 'react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
		{ key: '12', section: 'хрень', code:'hren1', name: 'react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
		{ key: '13', section: 'чушь', code:'hren1', name: 'полная хрень react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
	]

	const getSectionsName=() => {
		//const numbers = [];
		let number = new Set();
		itemsList.forEach(function (item, i, arr) {
			number.add(item.section);
			//numbers.push(item.section);
		});
		return Array.from(number).sort();
	}

	const [sectionsList, setSectionsList] = useState(getSectionsName());

	const [currentSection, setCurrentSection] = useState(
		localStorage.getItem("currentSection")?.split(",") || ["none"]
	);

	const setCurSection = (section) => {
		// установим выбранный раздел текущим
		console.log(section.toLowerCase());
		setCurrentSection( [section]);
	}

	useEffect(()=> {
		localStorage.setItem("currentSection", currentSection)
	},[currentSection])


	return <CurrentContext.Provider value={{currentSection, setCurSection,sectionsList, itemsList}}>
		{/*говорим, все пропсы должны быть видимы внутри всех вызываемых компонентов*/}
		{props.children}
	</CurrentContext.Provider>

}
