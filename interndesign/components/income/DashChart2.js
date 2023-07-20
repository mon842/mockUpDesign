import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { Grid } from '@mui/material';
import { ResponsiveContainer } from 'recharts';


const data = [
  { name: '20', value1: 30, value2: 25, value3: 30, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
  { name: '25', value1: 30, value2: 40, value3: 31, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
  { name: '30', value1: 45, value2: 45, value3: 40, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
  { name: '35', value1: 55, value2: 55, value3: 55, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
  { name: '40', value1: 70, value2: 70, value3: 70, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
  { name: '60', value1: 90, value2: 80, value3: 90, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
  { name: '65', value1: 100, value2: 100, value3: 90, color1: '#0a24cf', color2: '#5542e3', color3: '#7383eb' },
];

const DashChart2 = () => {
  return (
      <ResponsiveContainer width="95%" height={200}>
        <BarChart width={450} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            domain={[0, 300]}
            ticks={[0, 100, 200, 300]}
          />
          <Tooltip />
          <Bar dataKey="value1" stackId="stack" fill="#0a24cf">
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}-1`} fill={entry.color1} />
              ))
            }
          </Bar>
          <Bar dataKey="value2" stackId="stack" fill="#5542e3">
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}-2`} fill={entry.color2} />
              ))
            }
          </Bar>
          <Bar dataKey="value3" stackId="stack" fill="#7383eb">
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}-3`} fill={entry.color3} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
        
  );
};

export default DashChart2;
