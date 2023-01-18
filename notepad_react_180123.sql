-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 18 2023 г., 14:23
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

--
-- notepad_react 18.01.23 with forein key
--
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `notepad_react`
--
CREATE DATABASE IF NOT EXISTS `notepad_react` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `notepad_react`;

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int NOT NULL,
  `code` varchar(200) NOT NULL,
  `name` varchar(256) NOT NULL,
  `section_id` int NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`id`, `code`, `name`, `section_id`, `content`) VALUES
(1, 'linux_ban_file', 'файлы бана', 1, 'нахождение файлов бана: /var/log/fail2ban.log\r\n  cat fail2ban.log | grep Ban'),
(2, 'linux_ip', 'баним IP-адрес', 1, 'fail2ban-client set ssh banip IP-адрес fail2ban-client nginx banip IP-адрес'),
(3, 'linux_mysql', 'time mysqldump', 1, 'time mysqldump -uweb -p_some_pswd web_ipc2u.ru > web_ipc2u.ru_15022020.sql \n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql'),
(4, 'js_getSelectionText', 'js getSelectionText', 2, 'function getSelectionText() {\n var text = \"\";\n     var activeEl = document.activeElement;\n var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;\n if (\n (activeElTagName == \"textarea\") || (activeElTagName == \"input\" &&\n /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&\n (typeof activeEl.selectionStart == \"number\")\n ) {\n text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd)\n   } else if (window.getSelection) {\n text = window.getSelection().toString();\n }\n return text;\n }\n document.onmouseup = document.onkeyup = document.onselectionchange = function() {\n   document.getElementById(\"sel\").value = getSelectionText();\n };\n Selection:\n <br>\n  <textarea id=\"sel\" rows=\"3\" cols=\"50\"></textarea>\n <p>Please select some text.</p>\n <input value=\"Some text in a text input\">\n <br>\n <input type=\"search\" value=\"Some text in a search input\">\n <br>\n <input type=\"tel\" value=\"4872349749823\">\n <br>\n <textarea>Some text in a textarea</textarea> \n url: https://stackoverflow.com/questions/5379120/get-the%20-highlighted-selected-text'),
(5, 'linux_ssl', 'ssl сертификаты', 3, 'root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt'),
(6, 'npm', 'установка npm', 1, '\"на площадке после установки \n + npm необходимо удалить два пакета gm  и gmsmith, которые помечены как необязательные'),
(7, 'pim_curl', 'curl', 6, 'curl -X POST -H \"Сontent-type: application/json\" -d \'{\"username\":\"pbk@ipc2u.ru\", \"password\":\"***\"}\' dev:***@pim.ipc2u.ru:8001/api/v1/login \n touch -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log \n tail -f www/correct_data/log/pimUpdate_$(date +%d_%m_%Y).log'),
(8, 'win_prnsсr', 'снимок полного экрана', 5, 'нажатие win + printscreen копирует в буфер снимок всего экрана. Если подключены 2 монитора то копируется первый'),
(9, 'react_default', 'вызов функции определения default состояния', 2, 'let [count, setCount] = useState(()=>{}), \n https://www.youtube.com/watch?v=bnzcSC8AmHY  timestamp 1:18'),
(10, 'react_base', 'react базовый от школы разработки интерфейсов', 2, 'https://www.youtube.com/watch?v=bnzcSC8AmHY'),
(11, 'mcedit', 'mcedit', 1, 'export EDITOR=mcedit'),
(12, 'mysldump', 'перенос баз с рабочей площадки на dev', 1, 'time mysqldump -uweb -pbzYCA3BVY4rfYDyt web_ipc2u.ru > web_ipc2u.ru_15022020.sql  \n wget --no-check-certificate https://ipc2u.com/files/web_ipc2u.com_18062018.sql'),
(13, 'ftp', 'ftp', 1, 'tp://user:passwd@ip:port'),
(14, 'cmd_route', 'прописывание маршрута route cmd', 5, 'cmd от имени администратора\nroute print\n route add xxx.xxx.xxx.xxx mask 255.255.255.255 10.0.0.1 metric 1 -p\n route del xxx.xxx.xxx.xxx'),
(15, 'simlink', 'simlink', 1, 'симлинк Ctrl+X и нажимаем S'),
(16, 'viewfile', 'просмотр файла', 1, 'less просматривает файл по одной странице за раз\n cat печатает содержимое файла на экране\n nl печатает содержимое файла на экране с номерами строк\n head отображает первые 10 строк текстового файла по умолчанию\n tail отображает последние 10 строк текстового файла по умолчанию\n more'),
(17, 'finnhub', 'finnhub', 2, 'проект: trading_react_3 \n https://finnhub.io/dashboard\n myvista@ya.ru\n cd40giaad3ibc23m70h0cd40giaad3ibc23m70hg'),
(18, 'mongodb', 'mongodb', 7, 'c:/Program Files/MongoDB/Tools/100/bin/mongodump  --db notepad  --out  d:/YandexDisk/work/node/notepad/backup-db/'),
(19, 'letsencript', 'letsencript сертификат', 3, 'letsencript  см d:YandexDiskworkipc2ussl-agent\n На каждом сервере вызывается в кроне строчка \n{ { { { /usr/sbin/ssl-agent.sh -d -p 2>&3; } | tee /dev/fd/3; } | mail -s \"SSL agent `date -I` COM\" pbk@ipc2u.ru; } 3>&1; } | mail -s \"SSL agent `date -I` COM\" mchain@yandex.ru\n Эта строчка запускает скрипт /usr/sbin/ssl-agent.sh и полученный результат рассылает тебе (обычный отчет) и мне (отладочный отчет). \n Скрипт ssl-agent.sh берет все файлы из /etc/nginx/sites-enabled, вытаскивает из них доменные записи, проверяет даты сертификатов и, при необходимости, запускает скрипт /usr/bin/acme-nginx. Его параметры:\n -h - помощь\n -p - боевой режим, без этого параметра сертификаты не заменятся, пройдет сухой прогон.\n -d - режим отладки, нужен для дополнительной информации.\n -f - форсирование выпуска сертификатов (игнорирование даты истечения).\n Скрипт acme-nginx производит выпуск SSL-сертификатов через letsencrypt, его источник - https://github.com/kshcherban/acme-nginx\n для запуска нового сайта, в соответствии с текущими стандартными настройками сайтов, ничего делать не надо. главное - чтобы сервер, для которого делается настройка был настроен слушать порт, не конкретный IP-адрес, иначе acme-nginx его не возьмет.\n т.е, должно быть указано listen 80 для http и listen 443 для https\n вместо listen 91.218.112.252:443 не пойдет, \n необходимо прописать: listen:443\n разделение домена по ip производить на уровне прописавыния dns'),
(20, 'git_clone', 'git clone на локальном компьютере', 4, 'git clone git@bitbucket.org:имя_пользователя/имя_репозитория.git .\n где \"имя_пользователя/имя_репозитория.git\" должны быть ваши данные\n \".\" точка в конце обязательна\n'),
(21, 'git_hard_reset', 'перезаписать файлы из репы взамен измененных на сайте', 4, 'git reset --hard origin/master\n git pull'),
(22, 'vi_cmd', 'vi команды', 1, 'http://rsusu1.rnd.runnet.ru/unix/ucomm/vi.html'),
(23, 'extract_ip', 'вытащить ip', 1, 'cat access_nginx.log.1  | grep \"POST /auth/register\" > registers'),
(24, 'grep', 'grep поиск', 1, 'grep -lr строка поиска рекурсивно ищет и выведет файл, в котором находится искомая строка\n grep -w \'213.180.203.74\' access_nginx.log  - вывести строки \n grep -c \'213.180.203.74\' access_nginx.log  - подсчитать количество строк\n grep -wr \'timed out\'>22.log  - рекурсивно найти 504-е ошибки\n grep -w \'POST /auth/?LOGIN\' access_apache.log.2.gz\n grep -w \'POST /auth/?LOGIN\' access_apache.log\n find .  loc_cntr.csv'),
(25, 'react_getSelectionText', 'получение выделенного текста getSelectionText', 2, 'https://ru.stackoverflow.com/questions/141961/%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0'),
(26, 'react_edit_in_double_click', 'редактирование текста по double-click in ReactJS', 2, 'https://www.educative.io/answers/how-to-edit-text-on-double-click-in-reactjs'),
(27, 'openserver', 'документация openserver', 1, 'https://ospanel.io/docs/'),
(28, 'git_ssl', 'сборка сертификата', 3, 'root@ipc2u:~# cat 222423165repl_2.crt SectigoRSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > ipc2u.de.crt \n cat m_ipc2u_ru.crt COMODORSADomainValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > m.ipc2u.ru.crt \n собираю сертификат, и полученный файл m.ipc2u.ru.crt кладу в папку сертификата, где уже лежат файлы m.ipc2u.ru.crt и m.ipc2u.ru.key \n возможен даже вараиант, когда присылают только 1 сертификат  для продления ----BEGIN CERTIFICATE----- MII .... QxrQ= -----END CERTIFICATE----- \n в таком случае из файла ipc2u.by.crt удалям самый верхний блок ----BEGIN CERTIFICATE-----   ...  ----END CERTIFICATE----- и заменяем его присланным');

-- --------------------------------------------------------

--
-- Структура таблицы `sections`
--

DROP TABLE IF EXISTS `sections`;
CREATE TABLE `sections` (
  `id` int NOT NULL,
  `code` varchar(200) NOT NULL,
  `name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `sections`
--

INSERT INTO `sections` (`id`, `code`, `name`) VALUES
(1, 'linux', 'linux'),
(2, 'react', 'react'),
(3, 'ssl', 'ssl'),
(4, 'git', 'git'),
(5, 'windows', 'windows'),
(6, 'pim', 'pim'),
(7, 'mongodb', 'mongodb');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `section_id` (`section_id`);

--
-- Индексы таблицы `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблицы `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
