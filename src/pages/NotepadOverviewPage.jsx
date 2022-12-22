import {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { CurrentContext } from "../context/ContextProvider";



export const NotepadOverviewPage = () => {

	const navigate = useNavigate();
	const {currentSection, setCurSection} = useContext(CurrentContext);
	const {itemsList, setItemsList} = useContext(CurrentContext);

	const [inputName, setInputName] = useState('');
	const [filteredArray, setFilteredArray] = useState(itemsList);

	const inputNameHandler = e => {
		setInputName(e.target.value);
	};
	const showHideHandler = e => {

		/*
		https://reactdev.ru/handbook/hooks-custom/#extracting-a-custom-hook
		* сначала выбираем ты строку, у которой надо скрыть/открыть данные
			а затем уже скрываем/открываем данные
		* Цель нашего хука useFriendStatus — подписать нас на статус друга. Поэтому он принимает в качестве аргумента friendID и возвращает статус друга в сети:
			function useFriendStatus(friendID) {
			  const [isOnline, setIsOnline] = useState(null)

			  // ...

			  return isOnline
			}
		*

		Вначале нашей целью было удалить дублированную логику из компонентов FriendStatus и FriendListItem. Они оба хотят знать, есть ли друг в сети.

		Теперь, когда мы извлекли эту логику в хук useFriendStatus, мы можем его использовать:


		function FriendStatus(props) {
		  const isOnline = useFriendStatus(props.friend.id)

		  if (isOnline === null) {
		    return 'Загрузка...'
		  }
		  return isOnline ? 'В сети' : 'Не в сети'
		}

		function FriendListItem(props) {
		  const isOnline = useFriendStatus(props.friend.id)

		  return (
		    <li style={{ color: isOnline ? 'green' : 'black' }}>
		      {props.friend.name}
		    </li>
		  )
		}
		*********************************************************************************************

		Совет: Передача информации между хуками¶
			Поскольку хуки являются функциями, мы можем передавать информацию между ними.

			Продемонстрируем это, используя другой компонент из нашего гипотетического примера чата. Это средство выбора получателей сообщений чата, которое показывает, находится ли выбранный в данный момент друг в сети:


			const friendList = [
			  { id: 1, name: 'Татьяна' },
			  { id: 2, name: 'Алла' },
			  { id: 3, name: 'Лиля' },
			]

			function ChatRecipientPicker() {
			  const [recipientID, setRecipientID] = useState(1)
			  const isRecipientOnline = useFriendStatus(recipientID)

			  return (
			    <>
			      <Circle color={isRecipientOnline ? 'green' : 'red'} />
			      <select
			        value={recipientID}
			        onChange={(e) =>
			          setRecipientID(Number(e.target.value))
			        }
			      >
			        {friendList.map((friend) => (
			          <option key={friend.id} value={friend.id}>
			            {friend.name}
			          </option>
			        ))}
			      </select>
			    </>
			  )
			}
			Мы сохраняем выбранный в настоящее время идентификатор друга в переменной состояния recipientID и обновляем его, если пользователь выбирает другого друга в <select>.

			Поскольку вызов хука useState даёт нам последнее значение переменной состояния recipientID, мы можем передать его в наш пользовательский хук useFriendStatus в качестве аргумента:


			const [recipientID, setRecipientID] = useState(1)
			const isRecipientOnline = useFriendStatus(recipientID)
			Это позволяет нам узнать, находится ли выбранный друг в сети. Если мы выберем другого друга и обновим переменную состояния recipientID, наш хук useFriendStatus отменит подписку на ранее выбранного друга и подпишется на статус вновь выбранного.

		* */

		//console.log(e.target.dataset.value);
		if (isOpen)
			setOpen(false);
		else
			setOpen(true);
	};

	const [isOpen, setOpen] = useState();

	const handleSectionSelect= (section)  => {
		setCurSection(section);
		navigate(`section/${section}`);
	}

	const handleItemSelect= (item)  => {
		setCurSection(item.section);
		navigate(`item/${item.code}`)
	}

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
			const listSectionArray = itemsList.filter(item => item.section.includes(inputName));
			const listNameArray = itemsList.filter(item => item.name.toLowerCase().includes(inputName.toLowerCase()));
			const newArray = arrayUnique(listSectionArray.concat(listNameArray))
			return newArray;
		});
	}, [inputName, currentSection, itemsList]);

	const listItems = filteredArray.map((item) =>
			<div className="row wrapper" key={item.key}>
				<div onClick={()=> handleSectionSelect(item.section)} className="col-3" style={{ border: '1px solid lightgray', cursor: "pointer" }}>{item.section}</div>
				<div  onClick={()=> handleItemSelect(item)} data-value={item.key} className={`col-9 text-nowrap text-break`} style={{border: '1px solid lightgray', cursor: "pointer" }}>{item.name}</div>{/*onMouseEnter*/}
				{isOpen ? <div  className="col-12 text-break" style={{   border: '1px solid lightgray' }}> {item.content}</div>:''}
			</div >
	);

	return (
		<div>
			<hr />
			<div className="row" style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div className="col-6">
					<label htmlFor="input-name" className="pe-1">Фильтр </label>
					<input type="text"  id="input-name" autoComplete="off"  onChange={inputNameHandler} style={{ height: '1.5rem', width: '10rem', marginTop: '1rem' }} />
				</div>
				<div className="col-6">
					<button className="btn btn-outline-secondary btn-sm" onClick={showHideHandler}>{isOpen ?'скрыть':'показать'} все</button>
				</div>
			</div>
			<div className="row text-center container" style={{  }}>
					<div className="col-3">Раздел</div>
					<div className="col-9">Название</div>
				{listItems}
			</div>
		</div>
	);
};