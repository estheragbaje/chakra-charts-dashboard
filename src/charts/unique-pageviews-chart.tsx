import { Chart, useChart, UseChartReturn } from '@chakra-ui/charts';
import { Card, Heading } from '@chakra-ui/react';
import { Line, LineChart } from 'recharts';

const totalUniqueViewsData = [
  { date: 'Mar 18', unique_views: 95 },
  { date: 'Mar 19', unique_views: 120 },
  { date: 'Mar 20', unique_views: 140 },
  { date: 'Mar 21', unique_views: 160 },
  { date: 'Mar 22', unique_views: 150 },
  { date: 'Mar 23', unique_views: 180 },
  { date: 'Mar 24', unique_views: 200 },
  { date: 'Mar 25', unique_views: 240 },
  { date: 'Mar 26', unique_views: 230 },
  { date: 'Mar 27', unique_views: 260 },
  { date: 'Mar 28', unique_views: 255 },
  { date: 'Mar 29', unique_views: 280 },
  { date: 'Mar 30', unique_views: 290 },
  { date: 'Mar 31', unique_views: 320 },
];

interface UniquePageViewsProps {
  chart: UseChartReturn<{ date: string; unique_views: number }>;
}

function UniquePageViewsChart(props: UniquePageViewsProps) {
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

export function UniquePageViewsCard() {
  const chart = useChart({
    data: totalUniqueViewsData,
    series: [{ name: 'unique_views', color: 'teal.solid' }],
  });
  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated' maxW='sm'>
      <Card.Header>
        <Card.Title>Unique Pageviews</Card.Title>
        <Heading size='3xl'>
          {chart.getTotal('unique_views').toLocaleString()}
        </Heading>
      </Card.Header>
      <Card.Body>
        <UniquePageViewsChart chart={chart} />
      </Card.Body>
    </Card.Root>
  );
}
