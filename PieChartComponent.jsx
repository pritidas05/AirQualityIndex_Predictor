import React from 'react';

import { PieChart, Pie, Cell, Tooltip} from 'recharts';
//FunnelChart, Funnel, Tooltip as FunnelTooltip, LabelList, ComposedChart, XAxis, YAxis, Legend, CartesianGrid, Bar 


const PieChartComponent = ({ extractedValues }) => {
 
  if (!extractedValues || extractedValues.length === 0) {
    return null; 
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF5722', '#2196F3', '#FFC107', '#9C27B0', '#4CAF50'];

  // Map extractedValues to pie chart data with labels by "name"
  const Data = extractedValues.map((value, index) => ({
    name: value.name,
    value: parseInt(value.value, 10), // Convert value to an integer using parseInt
    color: COLORS[index % COLORS.length], // Assign a color from COLORS array
  }));

  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        {/* Legend */}
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          {Data.map((entry, index) => (
            <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: entry.color, marginRight: '5px' }}></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <PieChart width={600} height={500}>
          <Pie data={Data} dataKey="value" nameKey="name" innerRadius={0} outerRadius={180} label>
            {Data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
         //Funnel Chart 
        <FunnelChart width={600} height={500}>
          <FunnelTooltip />
          <Funnel data={Data} dataKey="value" nameKey="name" innerRadius={0} outerRadius={180} label>
            {Data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList position="right" stroke="none" dataKey="name" />
          </Funnel>
        </FunnelChart>
      </div> */}
     
    </div>
  );
};

export default PieChartComponent;
