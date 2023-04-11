import {React, useContext} from 'react'
import "./navbar.scss"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." className="searchInput"/>
          <SearchRoundedIcon className="searchIcon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon classsName="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeRoundedIcon 
            classsName="icon" 
            onClick={()=>dispatch({type: "TOGGLE"})}/>
          </div>
          <div className="item">
            <FullscreenExitRoundedIcon classsName="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneRoundedIcon classsName="icon"/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRoundedIcon classsName="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListRoundedIcon className="icon"/>
          </div>
          <div className="item">
            <img 
            src="https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="" 
            className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar