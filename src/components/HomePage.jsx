import React from 'react'
import {Link} from 'react-router-dom';
import Header from './Header';

import '../style/homePage.css'


export default function HomePage() {
    return (
        <div className='homeContainer'>
            <Header header="Logistics Management"/>
            <Link to='/signUp'><button className='button' >Sign Up</button></Link>
            <Link to='signIn'><button className='button' >Sign In</button></Link>
        </div>
    )
}
