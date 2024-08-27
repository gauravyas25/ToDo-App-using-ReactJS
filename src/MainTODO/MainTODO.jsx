import React, { useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem("lists"));
    }else{
        return [];
    }
}

export default function MainTODO(){

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([getLocalItems()]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };


    const listItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) =>{
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) =>{
                return;
            });
        })
    }

    useEffect(() =>{
        localStorage.setItem("lists", JSON.stringify(Items));
    }, [Items]);




    return(
        <div className="homeContainer">
            <div className="todo">
                <h5>ToDo List &nbsp; <ArrowDropDownIcon/></h5> <br /> 
                <TextField type="text" placeholder="Add Items" onChange={itemEvent} value={inputList} id="outlined-basic" variant="outlined" />
                <AddCircleIcon className="icon" onClick={listItems}/>
                <hr /> 
                <h4>Today's Tasks &nbsp; <CancelIcon onClick={deleteItems}/></h4>   
                <ol>
                    {Items.map((itemval, index)=> {
                        return  <li key={index} id={index} onSelect={deleteItems}><Checkbox/> {itemval}   <hr /></li> 
                    }) }
                </ol>
            </div>
        </div>
    );
}