import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default ({ rates })=> (
  <LineChart width={600} height={300} data={rates}
             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <XAxis dataKey='time'/>
    <YAxis/>
    <CartesianGrid strokeDasharray='3 3'/>
    <Tooltip/>
    <Legend />
    <Line type='monotone' dataKey='open' stroke='#8884d8' activeDot={{r: 8}}/>
    <Line type='monotone' dataKey='high' stroke='#82ca9d' />
  </LineChart>
);