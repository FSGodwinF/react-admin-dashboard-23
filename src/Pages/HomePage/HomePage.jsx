import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import "./homepage.scss"
import Widgets from '../../Components/Widgets/Widgets'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'
import Lists from '../../Components/Lists/Lists'

const HomePage = () => {
  return (
    <div className="homepage">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Half-year Revenue"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Recent transactions</div>
            <Lists/>
          </div>
          </div>
    </div>
  )
}

export default HomePage