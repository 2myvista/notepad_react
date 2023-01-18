import {createContext, useState, useEffect} from "react"
export const CurrentContext = createContext();

export const CurrentContextProvider = (props) => {

	const itemsList = [
		{ key: '0', section: 'linux', code:'linux_ban_file', name: 'файлы бана', content: "нахождение файлов бана: /var/log/fail2ban.log\n  cat fail2ban.log | grep Ban" },
		{ key: '1', section: 'linux', code:'linux_ip', name: 'баним IP-адрес', content: "fail2ban-client set ssh banip IP-адрес fail2ban-client nginx banip IP-адрес" },
		{ key: '2', section: 'ssl', code:'git_ssl', name: 'сборка сертификата', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt \n cat m_ipc2u_ru.crt COMODORSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > m.ipc2u.ru.crt \n собираю сертификат, и полученный файл m.ipc2u.ru.crt кладу в папку сертификата, где уже лежат файлы m.ipc2u.ru.crt и m.ipc2u.ru.key \n возможен даже вараиант, когда присылают только 1 сертификат  для продления ----BEGIN CERTIFICATE----- MII .... QxrQ= -----END CERTIFICATE----- \n в таком случае из файла ipc2u.by.crt удалям самый верхний блок ----BEGIN CERTIFICATE-----   ...  ----END CERTIFICATE----- и заменяем его присланным" },
		{ key: '3', section: 'linux', code:'linux_mysql', name: 'time mysqldump', content: "time mysqldump -uweb -p'_some_pswd' web_ipc2u.ru > web_ipc2u.ru_15022020.sql \n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql" },
		{ key: '4', section: 'react', code:'js_getSelectionText', name: 'js getSelectionText', content: "function getSelectionText() {\n var text = \"\";\n     var activeEl = document.activeElement;\n var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;\n if (\n (activeElTagName == \"textarea\") || (activeElTagName == \"input\" &&\n /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&\n (typeof activeEl.selectionStart == \"number\")\n ) {\n text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);\n   } else if (window.getSelection) {\n text = window.getSelection().toString();\n }\n return text;\n }\n document.onmouseup = document.onkeyup = document.onselectionchange = function() {\n   document.getElementById(\"sel\").value = getSelectionText();\n };\n Selection:\n <br>\n  <textarea id=\"sel\" rows=\"3\" cols=\"50\"></textarea>\n <p>Please select some text.</p>\n <input value=\"Some text in a text input\">\n <br>\n <input type=\"search\" value=\"Some text in a search input\">\n <br>\n <input type=\"tel\" value=\"4872349749823\">\n <br>\n <textarea>Some text in a textarea</textarea> \n url: https://stackoverflow.com/questions/5379120/get-the%20-highlighted-selected-text" },

		{ key: '5', section: 'ssl', code:'linux_ssl', name: 'ssl сертификаты', content: "root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt" },
		{ key: '6', section: 'linux', code:'npm', name: 'установка npm',content : "на площадке после установки \n + npm необходимо удалить два пакета gm  и gmsmith, которые помечены как необязательные " },
		{ key: '7', section: 'pim', code:'pim_curl', name: 'curl',content : "curl -X POST -H \"Сontent-type: application/json\" -d '{\"username\":\"pbk@ipc2u.ru\", \"password\":\"***\"}' dev:***@pim.ipc2u.ru:8001/api/v1/login \n touch -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log \n tail -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log  " },
		{ key: '8', section: 'windows', code:'win_prnsсr', name: 'снимок полного экрана',content : "нажатие win + printscreen копирует в буфер снимок всего экрана. Если подключены 2 монитора то копируется первый" },
		{ key: '9', section: 'react', code:'react_default', name: 'вызов функции определения default состояния',content :"let [count, setCount] = useState(()=>{}); \n https://www.youtube.com/watch?v=bnzcSC8AmHY  timestamp 1:18" },
		{ key: '10', section: 'react', code:'react_base', name: 'react базовый от школы разработки интерфейсов',content :"https://www.youtube.com/watch?v=bnzcSC8AmHY" },
		{ key: '11', section: 'linux', code:'mcedit', name: "mcedit", content: "export EDITOR=mcedit" },
		{ key: '12', section: 'linux', code:'mysldump', name: 'перенос баз с рабочей площадки на dev',content :"time mysqldump -uweb -pbzYCA3BVY4rfYDyt web_ipc2u.ru > web_ipc2u.ru_15022020.sql  \n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql" },
		{ key: '13', section: 'linux', code:'ftp', name: 'ftp',content :"ftp://user:passwd@ip:port" },
		{ key: '14', section: 'windows', code:'cmd_route', name: 'прописывание маршрута route cmd ',content :"cmd от имени администратора\nroute print\n route add xxx.xxx.xxx.xxx mask 255.255.255.255 10.0.0.1 metric 1 -p\n route del xxx.xxx.xxx.xxx" },
		{ key: '15', section: 'linux', code:'simlink', name: 'simlink ',content :"симлинк Ctrl+X и нажимаем S" },
		{ key: '16', section: 'linux', code:'viewfile', name: 'просмотр файла ',content :"less просматривает файл по одной странице за раз\n cat печатает содержимое файла на экране\n nl печатает содержимое файла на экране с номерами строк\n head отображает первые 10 строк текстового файла по умолчанию\n tail отображает последние 10 строк текстового файла по умолчанию\n more" },
		{ key: '17', section: 'react', code:'finnhub', name: 'finnhub ',content :"проект: trading_react_3 \n https://finnhub.io/dashboard\n myvista@ya.ru\n cd40giaad3ibc23m70h0cd40giaad3ibc23m70hg" },
		{ key: '18', section: 'mongodb', code:'mongodb', name: 'mongodb ',content :"c:/Program\\ Files/MongoDB/Tools/100/bin/mongodump  --db notepad  --out  d:/YandexDisk/work/node/notepad/backup-db/" },
		{ key: '19', section: 'ssl', code:'letsencript', name: 'letsencript сертификат',content :"letsencript  см d:\\YandexDisk\\work\\ipc2u\\ssl-agent\\\n На каждом сервере вызывается в кроне строчка \n{ { { { /usr/sbin/ssl-agent.sh -d -p 2>&3; } | tee /dev/fd/3; } | mail -s \"SSL agent `date -I` COM\" pbk@ipc2u.ru; } 3>&1; } | mail -s \"SSL agent `date -I` COM\" mchain@yandex.ru\n Эта строчка запускает скрипт /usr/sbin/ssl-agent.sh и полученный результат рассылает тебе (обычный отчет) и мне (отладочный отчет). \n Скрипт ssl-agent.sh берет все файлы из /etc/nginx/sites-enabled, вытаскивает из них доменные записи, проверяет даты сертификатов и, при необходимости, запускает скрипт /usr/bin/acme-nginx. Его параметры:\n -h - помощь\n -p - боевой режим, без этого параметра сертификаты не заменятся, пройдет сухой прогон.\n -d - режим отладки, нужен для дополнительной информации.\n -f - форсирование выпуска сертификатов (игнорирование даты истечения).\n Скрипт acme-nginx производит выпуск SSL-сертификатов через letsencrypt, его источник - https://github.com/kshcherban/acme-nginx\n для запуска нового сайта, в соответствии с текущими стандартными настройками сайтов, ничего делать не надо. главное - чтобы сервер, для которого делается настройка был настроен слушать порт, не конкретный IP-адрес, иначе acme-nginx его не возьмет.\n т.е, должно быть указано listen 80 для http и listen 443 для https\n вместо listen 91.218.112.252:443 не пойдет, \n необходимо прописать: listen:443\n разделение домена по ip производить на уровне прописавыния dns" },
		{ key: '20', section: 'git', code:'git_clone', name: 'git clone на локальном компьютере',content :"git clone git@bitbucket.org:имя_пользователя/имя_репозитория.git .\n где \"имя_пользователя/имя_репозитория.git\" должны быть ваши данные\n \".\" точка в конце обязательна\n" },
		{ key: '21', section: 'git', code:'git_hard_reset', name: "перезаписать файлы из репы взамен измененных на сайте",content :"git reset --hard origin/master\n git pull" },
		{ key: '22', section: 'linux', code:'vi_cmd', name: "vi команды",content :"http://rsusu1.rnd.runnet.ru/unix/ucomm/vi.html" },
		{ key: '23', section: 'linux', code:'extract_ip', name: "вытащить ip",content :"cat access_nginx.log.1  | grep \"POST /auth/register\" > registers" },
		{ key: '24', section: 'linux', code:'grep', name: "grep поиск",content :"grep -lr 'строка поиска' рекурсивно ищет и выведет файл, в котором находится искомая строка\n grep -w '213.180.203.74' access_nginx.log  - вывести строки \n grep -c '213.180.203.74' access_nginx.log  - подсчитать количество строк\n grep -wr 'timed out'>22.log  - рекурсивно найти 504-е ошибки\n grep -w 'POST /auth/?LOGIN' access_apache.log.2.gz\n grep -w 'POST /auth/?LOGIN' access_apache.log\n find .  loc_cntr.csv" },
		{ key: '25', section: 'react', code:'react_getSelectionText', name: "получение выделенного текста getSelectionText",content :"https://ru.stackoverflow.com/questions/141961/%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0" },
		{ key: '26', section: 'react', code:'react_edit_in_double_click', name: "редактирование текста по double-click in ReactJS",content :"https://www.educative.io/answers/how-to-edit-text-on-double-click-in-reactjs" },
		{ key: '27', section: 'linux', code:'openserver', name: "документация openserver",content :"https://ospanel.io/docs/" },
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

	const [isSelected,setSelected] = useState(false );

	const [sectionsList, setSectionsList] = useState(getSectionsName());

	const [currentSection, setCurrentSection] = useState(
		localStorage.getItem("currentSection") || "none"
	);

	const [currentItem, setCurrentItem] = useState(
		localStorage.getItem("currentItem") || "none"
	);
/*
	const getSelectedText=()=> {
		if (`${window.getSelection().toString()}`)
			console.log(`Selected text: ${window.getSelection().toString()}`);
	}*/

/*	const [selectedText, setSelectedText] = useState(getSelectedText());*/

	const setCurSection = (section) => {
		// установим выбранный раздел текущим
		console.log(section.toLowerCase());
		setCurrentSection( section);
	}

	const setCurItem = (item) => {
		// установим выбранный элемент текущим
		console.log(item.code);
		setCurrentItem( [item.code]);
	}

/*	const handleTextSelect = ()=> {
		if (`${window.getSelection()}`) {
			console.log(`Selected text: ${window.getSelection().toString()}`);
			setSelected(true);
		}
		else {
			console.log(`UnSelected text: ${window.getSelection().toString()}`);
			setSelected(false);
		}
		console.log(isSelected);


	}*/

	useEffect(()=> {
		localStorage.setItem("currentSection", currentSection)
	},[currentSection])

	useEffect(()=> {
		localStorage.setItem("currentItem", currentItem)
	},[currentItem])



	return <CurrentContext.Provider value={{currentSection, setCurSection, currentItem, setCurItem, sectionsList, itemsList, getFormatedText,/* isSelected*/}}>
		{/*говорим, все пропсы должны быть видимы внутри всех вызываемых компонентов*/}
		{props.children}
	</CurrentContext.Provider>

}
