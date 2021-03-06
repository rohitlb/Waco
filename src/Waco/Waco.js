import React from 'react'
import { About } from './About/About'
import { Home } from './Home/Home'
import { Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Waco_contact from './Waco_contact'


export const Waco=(props)=>{
    return(
        <div>
             <Navbar menu={[{name:"Home",link:"/waco"},{name:"About Us",link:"/waco/about"},
          {name:"Contact Us",link:"/waco/contact"}]}/>
        <Route exact path={props.match.url} component={Home} />
        <Route  path={`${props.match.url}/about`} component={About} />
        <Route  path={`${props.match.url}/contact`} component={Waco_contact} />

        </div>
    )
}