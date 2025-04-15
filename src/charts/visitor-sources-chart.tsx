import { BarList, type BarListData, useChart } from '@chakra-ui/charts';
import { Card } from '@chakra-ui/react';

const topSources = [
  { name: 'Google', value: 400 },
  { name: 'Twitter', value: 320 },
  { name: 'LinkedIn', value: 250 },
  { name: 'Newsletter', value: 200 },
  { name: 'Direct', value: 180 },
  { name: 'Reddit', value: 150 },
];

function VisitorSourcesChart() {
  const chart = useChart<BarListData>({
    sort: { by: 'value', direction: 'desc' },
    data: topSources,
    series: [{ name: 'name', color: 'teal.subtle', label: 'Top Sources' }],
  });
  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Label title='Top Sources' flex='1'>
          <BarList.Bar tooltip />
        </BarList.Label>
        <BarList.Label title='Visitors' titleAlignment='end'>
          <BarList.Value />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  );
}

export function VisitorSourcesCard() {
  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated'>
      <Card.Header>
        <Card.Title>Visitor Sources</Card.Title>
      </Card.Header>
      <Card.Body>
        <VisitorSourcesChart />
      </Card.Body>
    </Card.Root>
  );
}
