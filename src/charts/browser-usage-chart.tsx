import { Chart, useChart } from '@chakra-ui/charts';
import { Card } from '@chakra-ui/react';
import { Cell, Label, Legend, Pie, PieChart, Tooltip } from 'recharts';

const browserUsageData = [
  { name: 'Chrome', users: 6200, color: 'blue.solid' },
  { name: 'Safari', users: 2400, color: 'purple.solid' },
  { name: 'Firefox', users: 1300, color: 'orange.solid' },
  { name: 'Edge', users: 800, color: 'teal.solid' },
  { name: 'Opera', users: 300, color: 'yellow.solid' },
  { name: 'Others', users: 200, color: 'pink.solid' },
];

function BrowserUsageChart() {
  const chart = useChart({
    data: browserUsageData,
  });
  return (
    <Chart.Root w='320px' h='256px' chart={chart} mx='auto'>
      <PieChart>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Legend content={<Chart.Legend />} />
        <Pie
          innerRadius={80}
          outerRadius={100}
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key('users')}
          nameKey='name'
        >
          <Label
            content={({ viewBox }) => (
              <Chart.RadialText
                viewBox={viewBox}
                title={chart.getTotal('users').toLocaleString()}
                description='users'
              />
            )}
          />
          {chart.data.map((item) => (
            <Cell key={item.color} fill={chart.color(item.color)} />
          ))}
        </Pie>
      </PieChart>
    </Chart.Root>
  );
}

export function BrowserUsageCard() {
  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated'>
      <Card.Header>
        <Card.Title>Visit Browsers</Card.Title>
      </Card.Header>
      <Card.Body>
        <BrowserUsageChart />
      </Card.Body>
    </Card.Root>
  );
}
