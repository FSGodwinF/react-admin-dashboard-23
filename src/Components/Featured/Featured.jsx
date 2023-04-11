import React from 'react'
import './featured.scss'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertRoundedIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={55} text={"55%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$786</p>
            <p className="desc">Last transactions not included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <ArrowDropDownRoundedIcon fontSize="small"/>
                        <div className="resultAmount ">$10.65k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <ArrowDropUpRoundedIcon fontSize="small"/>
                        <div className="resultAmount ">$11.65k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <ArrowDropUpRoundedIcon fontSize="small"/>
                        <div className="resultAmount ">$15.65k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured