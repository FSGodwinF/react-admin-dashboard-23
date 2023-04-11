import React from 'react'
import './widgets.scss'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
const Widgets = ({type}) => {

  let data;

  const amount = 100;
  const diff = 20;

    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon:<PersonRoundedIcon className="icon" 
                style = {{backgroundColor: "cornflowerblue", borderRadius: "5px"}}
                />
                
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon:<ShoppingCartRoundedIcon className="icon"
                style = {{backgroundColor: "rgb(218, 49, 218)", borderRadius: "5px"}} />
                
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view net earnings",
                icon:<PaidRoundedIcon className="icon"
                style = {{backgroundColor: "rgb(39, 231, 39)", borderRadius: "5px"}} />
                
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "view balance",
                icon:<AccountBalanceRoundedIcon className="icon"
                style = {{backgroundColor: "rgb(247, 247, 35)", borderRadius: "5px"}} />
                
            };
            break;
            default:
                break;
    }


  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpRoundedIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets