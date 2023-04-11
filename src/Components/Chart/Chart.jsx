import React from 'react'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss'

const data = [
    {
      name: 'January',
      Total: 3300,
      
    },
    {
      name: 'February',
      Total: 5000,
     
    },
    {
      name: 'March',
      Total: 3500,
      
    },
    {
      name: 'April',
      Total: 4200,
     
    },
    {
      name: 'May',
      Total: 2500,
      
    },
    {
      name: 'June',
      Total: 3490,
      
    },
]
    
const Chart = ({title}) => {
  return (
    <div className="chart">
        <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={3/1}>
                    <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                
            </defs>
            <XAxis dataKey="name" stroke="gray"/>
            
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
            
            </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart