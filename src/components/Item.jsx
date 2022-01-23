import React from 'react'

export default function Item(props) {
    //functions
    const forklift = ()=>{
        if(props.item.forklift){
            return "Yes"
        }
        else{
            return "No"
        }
    }
    const putItemAway = ()=>{
        if(props.item.forklift){
            if(props.worker.forklift){
                props.putItemInPlace(props.item.id, props.worker.id);
            }
            else{
                alert("Item requires forklift license")
            }
        }
        else{
            props.putItemInPlace(props.item.id, props.worker.id);
        }

    }

    return (
        <div>
            {console.log("item")}
            <p>ID: {props.item.id}</p>
            <p>Name: {props.item.name}</p>
            <p>Needs Forklift: {forklift()}</p>
            <button onClick={()=>{putItemAway()}}>Update</button>
        </div>
    )
}
