import { Chart, useChart } from '@chakra-ui/charts';
import { Card } from '@chakra-ui/react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const bounceRateData = [
  { date: 'Mar 18', bounce_rate: 45 },
  { date: 'Mar 19', bounce_rate: 42 },
  { date: 'Mar 20', bounce_rate: 40 },
  { date: 'Mar 21', bounce_rate: 38 },
  { date: 'Mar 22', bounce_rate: 41 },
  { date: 'Mar 23', bounce_rate: 39 },
  { date: 'Mar 24', bounce_rate: 36 },
  { date: 'Mar 25', bounce_rate: 35 },
  { date: 'Mar 26', bounce_rate: 34 },
  { date: 'Mar 27', bounce_rate: 33 },
  { date: 'Mar 28', bounce_rate: 32 },
  { date: 'Mar 29', bounce_rate: 31 },
  { date: 'Mar 30', bounce_rate: 30 },
  { date: 'Mar 31', bounce_rate: 29 },
];

function BounceRateChart() {
  const chart = useChart({
    data: bounceRateData,
    series: [{ name: 'bounce_rate', color: 'orange.solid' }],
  });
  return (
    <Chart.Root maxH='2xs' chart={chart}>
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key('date')} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          cursor={{ fill: chart.color('bg.muted') }}
          animationDuration={0}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  );
}

export function BounceRateCard() {
  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated'>
      <Card.Header>
        <Card.Title>Bounce Rate</Card.Title>
      </Card.Header>
      <Card.Body>
        <BounceRateChart />
      </Card.Body>
    </Card.Root>
  );
}
