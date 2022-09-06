import React,{useState} from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from "./components/Expenses/Expenses";
let DUMMY_EXPENSE = [
    {
        id : 'e1',
        title : 'school fee',
        amount : 250,
        date : new Date(2021, 5 , 12)
    },
    {
        id : 'e2',
        title : 'books',
        amount : 500,
        date : new Date(2021, 6 , 24)
    },
    {
        id : 'e3',
        title : 'house Rent',
        amount : 250,
        date : new Date(2021, 9 , 14)
    },
    {
        id : 'e4',
        title : 'food',
        amount : 850,
        date : new Date(2022, 8 , 22)
    },
];
function App()
{
    const[expenses,setExpenses]=useState(DUMMY_EXPENSE);
    const addExpenseHandler=(expense)=>{
        const updatedExpense = [expense,...expenses]
        setExpenses(updatedExpense)

    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
       );
}

export default App;