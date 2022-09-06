
import './ExpenseItem.css';
import React,{ useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props)
{
    // const [newTitle,setNewTitle]=useState("");
    // // jo v chez react me change hote rehta hai usko hmlog eact me ase normally ni banate hai

    // const [title,setTitle]=useState(props.title);
    // // set title me set title k liye aa jayega and title me variabel aa jayega
    // // and setatitle k jagah kuch v nam rakh sakte hai

    // const changeHandler = (event)=>{
    //     setNewTitle(event.target.value);
    // }
    // const clickHandler = ()=> {
    //    setTitle(newTitle);
    // }
   return(
    <Card className='expense-item'>
        <ExpenseDate date ={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className="expense-item__price">${  props.amount }</div>
        </div>
        {/* <input type="text" value={newTitle} onChange={changeHandler}></input>
        <button onClick={clickHandler}>change title</button> */}
    </Card>
   );
}
export default ExpenseItem;