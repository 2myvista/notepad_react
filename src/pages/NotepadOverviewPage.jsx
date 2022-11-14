import {useContext, useState, useEffect} from "react";
import { CurrentContext } from "../context/ContextProvider";

const itemsList = [
	{ key: '0', section: 'linux', name: 'файлы бана', content: "нахождение файлов бана /var/log/fail2ban.log ---- cat fail2ban.log | grep Ban" },
	{ key: '1', section: 'linux', name: 'баним IP-адрес', content: "fail2ban-client set ssh banip IP-адрес fail2ban-client nginx banip IP-адрес" },
	{ key: '2', section: 'git', name: 'сборка сертификата', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
	{ key: '3', section: 'git', name: 'git clone', content: "возможен вараиант, когда пнрисылают только 1 сертификат  для продления BEGIN CERTIFICATE MII .... QxrQ= END CERTIFICATE в таком случае из файла ipc2u.by.crt удалям самый верхний блок ----BEGIN CER\\nTIFICATE-----   ...  ----END CERTIFICATE и заменяем его присланным" },
	{ key: '4', section: 'linux', name: 'time mysqldump', content: "time mysqldump \\n -uweb -pbzYCA3BVY4rfYDyt web_ipc2u.ru > web_ipc2u.ru_15022020.sq \\n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql\\n" },
	{ key: '5', section: 'ssh', name: 'файлов бана', content: "нахождение файлов бана /var/log/fail2ban.log ---- cat fail2ban.log | grep Ban" },
	{ key: '6', section: 'git', name: 'ssl сертификаты', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
	{ key: '7', section: 'linux', name: 'установка npm',content : "на площадке после установки npm необходимо удалить два пакета gm  и gmsmith, которые у нас помечены как необязатльные " },
];

export const NotepadOverviewPage = () => {

	const arrHide=Array();

	itemsList.map((item)=>{
		arrHide[item.key]={ name: item.key, active: false }
	})

	const state = {
		showBox: false
	};

	const {currentSection, setCurSection} = useContext(CurrentContext);

	//const [inputSection, setInputSection] = useState('');
	const [inputName, setInputName] = useState('');
	const [filteredArray, setFilteredArray] = useState(itemsList);

	const inputNameHandler = e => {
		setInputName(e.target.value);
	};

	const [isShownHoverContent, setIsShownHoverContent] = useState('')

	const [hover, setHover] = useState(arrHide);

	const onClickHandler = event => {
		//
		let el = event.target;
		console.log(el);
		console.log(event.target.dataset);
		//el.classList.add('active');
		//console.log(el.attr('value'));
		setHover( (e)=>{
			//console.log(e);
		})
	}

	/*= e => {
		console.log(key);
	//	console.log(e.target);
	};*/

	function arrayUnique(array) {
		var a = array.concat();
		for(var i=0; i<a.length; ++i) {
			for(var j=i+1; j<a.length; ++j) {
				if(a[i] === a[j])
					a.splice(j--, 1);
			}
		}
		return a;
	}

	useEffect(() => {
		setFilteredArray((_) => {
			//const newArray = itemsList.filter(item => item.name.includes(inputName)).filter(item => item.section.includes(inputSection));
			const listSectionArray = itemsList.filter(item => item.section.includes(inputName));
			const listNameArray = itemsList.filter(item => item.name.toLowerCase().includes(inputName.toLowerCase()));
			const newArray = arrayUnique(listSectionArray.concat(listNameArray))
			return newArray;
		});
	}, [inputName, currentSection]);

	const listItems = filteredArray.map((item) =>
			<div className="row wrapper" key={item.key}>
				<div className="col-4" style={{ border: '1px solid lightgray' }}>{item.section}</div>
				<div onClick={onClickHandler } data-value={item.key} className={`col-2 text-nowrap text-break`} style={{   border: '1px solid lightgray' }}>{item.name}</div>{/*onMouseEnter*/}
				<div className="col-4 text-break " style={{   border: '1px solid lightgray' }}> {item.content}</div>
			</div >

	);

	return (
		<div>
			<h3>{currentSection}</h3>
			<hr />
			<form style={{ maxWidth: '23rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div>
					<label htmlFor="input-name" className="pe-1">Фильтр </label>
					<input type="text" id="input-name" autoComplete="off"  onChange={inputNameHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
				</div>
			</form>
			<br />
			<div className="row text-center container" style={{  }}>

					<div className="col-4">Раздел</div>
					<div className="col-4">Название</div>

				{listItems}
			</div>



		</div>
	);
};