import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { day: 'Mon', jobs: 2 },
  { day: 'Tue', jobs: 9 },
  { day: 'Wed', jobs: 5 },
  { day: 'Thu', jobs: 8 },
  { day: 'Fri', jobs: 10 },
  { day: 'Sat', jobs: 4 },
  { day: 'Sun', jobs: 2 },
];

const RoundedBar = (props) => {
  const { x, y, width, height } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={props.fill}
        rx={15}
        ry={15}
      />
    </g>
  );
};

const JobsBarChart = () => {
  return (
    <div className="bg-yellow-200 p-6 rounded-lg shadow-md" style={{ height: '400px' , width: '400px' }}>
      <h3 className="text-lg font-semibold mb-6">Jobs Posted This Week</h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{ top: -30, right: 20, left: -30, bottom: 5 }}
          barCategoryGap="20%"
        >
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: '#718096' }}
            padding={{ left: 12, right: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: 'transparent', fontSize: 12 }}
            domain={[0, 'dataMax + 5']}
            width={25} // Reduced YAxis width
          />
          <Tooltip 
            cursor={false} // This removes the gray background on hover
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <Bar
            dataKey="jobs"
            name="Jobs Posted"
            shape={<RoundedBar  />}
            barSize={30}
            radius={[20, 20, 0, 0]}
            margin={{ top: 0, right: 10, left: 5, bottom: 0 }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 2 ? '#4FD1C5' : '#3182CE'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JobsBarChart;