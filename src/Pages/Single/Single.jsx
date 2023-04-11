import React from 'react'
import "./single.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Chart/Chart'
import Lists from '../../Components/Lists/Lists'
const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=600"
               alt="" 
               className="itemImage"
                />
                <div className="details">
                  <h1 className="itemTitle">
                    Mika Denise
                  </h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">mikadenise@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">678-999-8-212</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">66, Elm Street, Bushwick</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Austria</span>
                  </div>
                </div>
            </div>
          </div>
          <div className="right">
            <Chart title="Half-year Revenue"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Recent Transactions</h1>
          <Lists/>
        </div>
      </div>
    </div>
  )
}

export default Single