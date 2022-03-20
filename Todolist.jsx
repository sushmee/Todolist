import React , {useState} from "react";
import ListCom from"./ListCom";

import AddIcon from '@mui/icons-material/Add';

const ToDoList =() =>
{
    const [item, setItem]= useState("");
    const [newitem, setNewItem] =useState([]);
    const itemEvent=(event ) =>
    {
        setItem(event.target.value);
    };
    const listOfItems= () =>{
        setNewItem((prevValue)=>{
            return[...prevValue,item];
        });
        setItem("");
    };
    return(
        <>
        <div className="main_div">
        <div className="center_div"> 
        <br/>
        <h1> ToDoList</h1>
        <br/>
        <input type="text"
        value={item}
        placeholder="Add An Items"
        onChange={itemEvent}
        />
        <button className ="newBtn" onClick={listOfItems}>
            <AddIcon/>
            </button>
            <br/>
            <ol>
                {newitem.map((val,index)=>
                {
                    return <ListCom key={index} text={val}/>;
                }
                )
                }
            </ol>
            <br/>
        </div>
            </div>
        </>
    );
};
export default ToDoList;
