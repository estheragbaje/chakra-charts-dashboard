import { Chart, useChart, UseChartReturn } from '@chakra-ui/charts';
import { Card, Heading } from '@chakra-ui/react';
import { Line, LineChart } from 'recharts';

const dailyActiveUsersData = [
  { date: 'Mar 18', users: 80 },
  { date: 'Mar 19', users: 100 },
  { date: 'Mar 20', users: 110 },
  { date: 'Mar 21', users: 130 },
  { date: 'Mar 22', users: 120 },
  { date: 'Mar 23', users: 140 },
  { date: 'Mar 24', users: 170 },
  { date: 'Mar 25', users: 200 },
  { date: 'Mar 26', users: 190 },
  { date: 'Mar 27', users: 210 },
  { date: 'Mar 28', users: 205 },
  { date: 'Mar 29', users: 230 },
  { date: 'Mar 30', users: 250 },
  { date: 'Mar 31', users: 280 },
];

interface ActiveUsersProps {
  chart: UseChartReturn<{ date: string; users: number }>;
}

export function ActiveUsersChart(props: ActiveUsersProps) {
  const { chart } = props;

  return (
    <Chart.Root width='80' height='16' chart={chart}>
      <LineChart data={chart.data}>
        {chart.series.map((item) => (
          <Line
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </LineChart>
    </Chart.Root>
  );
}

export function ActiveUsersCard() {
  const chart = useChart({
    data: dailyActiveUsersData,
    series: [{ name: 'users', color: 'orange.solid' }],
  });

  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated' maxW='sm'>
      <Card.Header>
        <Card.Title>Active Users</Card.Title>
        <Heading size='3xl'>{chart.getTotal('users').toLocaleString()}</Heading>
      </Card.Header>
      <Card.Body>
        <ActiveUsersChart chart={chart} />
      </Card.Body>
    </Card.Root>
  );
}
