import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const PriceChart = ({ data }) => {
  const formatted = data.map((p, i) => ({ day: i + 1, price: p }));

  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={formatted}>
        <Line type="monotone" dataKey="price" stroke="#22c55e" dot={false} strokeWidth={2} />
        <Tooltip contentStyle={{ fontSize: 10 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
