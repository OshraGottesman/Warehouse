import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

import '../style/management.css'

export default function Management(props) {
    console.log(props.workers);
    console.log(props);
    return (
        <div>
            <Header header="Manager"/>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Times Entered</th>
                    <th>Number of Prudocts put Away</th>
                </tr>
                {props.workers.map((worker) => {
                    return( 
                        <tr>
                            <td>{worker.id}</td>
                            <td>{worker.fullName}</td>
                            <td>{worker.timesEntered}</td>
                            <td>{worker.itemsPutAway}</td>
                        </tr>
                    )
                })}
            </table>
            <Link to='/'>Sign Out</Link>
        </div>
    )
}
