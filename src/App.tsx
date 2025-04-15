import { Stack, Grid, GridItem, Heading } from '@chakra-ui/react';
import { UniquePageViewsCard } from './charts/unique-pageviews-chart';
import { ActiveUsersCard } from './charts/active-users-chart';
import { PageVisitsCard } from './charts/page-visits-chart';
import { BrowserUsageCard } from './charts/browser-usage-chart';
import { BounceRateCard } from './charts/bounce-rate-chart';
import { VisitorSourcesCard } from './charts/visitor-sources-chart';
import { PageViewsCard } from './charts/page-views-chart';

function App() {
  return (
    <Stack bg='gray.100' px='16' py='20' gap='10'>
      <Heading size='2xl'>Website Analytics Dashboard</Heading>
      <Grid
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap='12'
      >
        <GridItem>
          <UniquePageViewsCard />
        </GridItem>
        <GridItem rowStart={2}>
          <ActiveUsersCard />
        </GridItem>
        <GridItem colSpan={3} rowSpan={2}>
          <PageVisitsCard />
        </GridItem>
      </Grid>

      <Grid templateColumns='repeat(4, 1fr)' gap='12'>
        <GridItem>
          <BrowserUsageCard />
        </GridItem>
        <GridItem colSpan={3}>
          <BounceRateCard />
        </GridItem>
      </Grid>

      <Grid templateColumns='repeat(2, 1fr)' gap='12'>
        <GridItem>
          <VisitorSourcesCard />
        </GridItem>
        <GridItem>
          <PageViewsCard />
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default App;
