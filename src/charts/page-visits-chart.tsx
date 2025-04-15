import { Chart, useChart } from '@chakra-ui/charts';
import { Card } from '@chakra-ui/react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const visitsData = [
  { date: 'Mar 18', visits: 120 },
  { date: 'Mar 19', visits: 150 },
  { date: 'Mar 20', visits: 170 },
  { date: 'Mar 21', visits: 200 },
  { date: 'Mar 22', visits: 180 },
  { date: 'Mar 23', visits: 220 },
  { date: 'Mar 24', visits: 250 },
  { date: 'Mar 25', visits: 300 },
  { date: 'Mar 26', visits: 280 },
  { date: 'Mar 27', visits: 320 },
  { date: 'Mar 28', visits: 310 },
  { date: 'Mar 29', visits: 340 },
  { date: 'Mar 30', visits: 360 },
  { date: 'Mar 31', visits: 400 },
];

function PageVisitsChart() {
  const chart = useChart({
    data: visitsData,
    series: [{ name: 'visits', color: 'teal.solid' }],
  });

  return (
    <Chart.Root maxH='sm' chart={chart}>
      <AreaChart
        accessibilityLayer
        data={chart.data}
        margin={{ bottom: 24, left: 24 }}
      >
        <XAxis
          dataKey={chart.key('date')}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 6)}
          stroke={chart.color('border')}
        />
        <YAxis stroke={chart.color('border')} />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Area
            type='natural'
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId='a'
          />
        ))}
      </AreaChart>
    </Chart.Root>
  );
}

export function PageVisitsCard() {
  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated'>
      <Card.Header>
        <Card.Title>Total Pagevisits</Card.Title>
      </Card.Header>
      <Card.Body>
        <PageVisitsChart />
      </Card.Body>
    </Card.Root>
  );
}
