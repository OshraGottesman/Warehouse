import React from 'react'
import Header from './Header'
import Item from './Item';
import { Link } from 'react-router-dom';

export default function WorkerPage(props) {
    console.log(props.worker);
    //hooks

    //functiona
    const forklift = ()=>{
        if(props.worker.forklift){
            return "YES"
        }
        else{
            return "NO"
        }
    }
    // const displayItems = ()=>{
    //     props.items.map((item)=>{

    //     })
    // }
    return (
        <div>
            <Header header={`Welcome ${props.worker.fullName}`}/>
            <h5>Details:</h5>
            <p>Full Name: {props.worker.fullName}</p>
            <p>ID: {props.worker.id}</p>
            <p>Forklift License: {forklift()}</p>
            <p>Items:</p>
            {props.items.map((item)=>{
                if(item.inPlace==false){
                    return <Item item={item} putItemInPlace={props.putItemInPlace} worker={props.worker}/>
                }
            })}
            <Link to='/'>Log Out</Link>
        </div>
    )
}
