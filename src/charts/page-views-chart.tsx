import { BarList, type BarListData, useChart } from '@chakra-ui/charts';
import { Card } from '@chakra-ui/react';

const pageViews = [
  { name: '/home', value: 800 },
  { name: '/blog', value: 600 },
  { name: '/pricing', value: 400 },
  { name: '/about', value: 300 },
  { name: '/contact', value: 200 },
];
export function PageViewsChart() {
  const chart = useChart<BarListData>({
    sort: { by: 'value', direction: 'desc' },
    data: pageViews,
    series: [{ name: 'name', color: 'teal.subtle', label: 'Views' }],
  });

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Label title='Page' flex='1'>
          <BarList.Bar tooltip />
        </BarList.Label>
        <BarList.Label title='Views' titleAlignment='end'>
          <BarList.Value />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  );
}

export function PageViewsCard() {
  return (
    <Card.Root size='lg' overflow='hidden' variant='elevated' h='full'>
      <Card.Header>
        <Card.Title>Page Views</Card.Title>
      </Card.Header>
      <Card.Body>
        <PageViewsChart />
      </Card.Body>
    </Card.Root>
  );
}
