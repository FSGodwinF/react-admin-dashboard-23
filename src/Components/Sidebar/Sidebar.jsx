import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Person4TwoToneIcon from '@mui/icons-material/Person4TwoTone';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {DarkModeContext} from "../../context/darkModeContext"

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext) ;


  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Fadenadmin</span>
            </Link>
            
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <Person4OutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}} >
                <li>
                    <Inventory2OutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <ShoppingBagRoundedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingRoundedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsRoundedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveRoundedIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <MonitorHeartRoundedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <SyncAltRoundedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsRoundedIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <Person4TwoToneIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutRoundedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div 
            className="colorOption" 
            onClick={()=> dispatch({type: "LIGHT"})}>

            </div>
            <div 
            className="colorOption" 
            onClick={()=> dispatch({type: "DARK"})}>

            </div>
        </div>
    </div>
  )
}

export default Sidebar