import React from 'react'
import '../App.css'
import {SidebarData} from './SidebarData'

function Sidebar() {
    return (
        <div className="col-sm-3 sidenav">
            <h4>Sniffer dogs <small>for object Detection</small></h4>
            <ul className="nav nav-pills nav-stacked">
                {SidebarData.map((val, key)=>{
                    return <li key={key}> 
                            {""}
                            <i className={val.icon}></i>
                            {""}
                            <a href="#" onClick={()=>{window.location.pathname = val.link}}>{val.title}</a>
                    </li>                    
                })} 
            </ul>           
        </div>
    )
}

export default Sidebar;
