import { Container, Title, SimpleGrid, Card, rem, Group, Paper, Text, Stack } from "@mantine/core";
import { CustomTable } from "@/components/mass/CustomTable";
import classes from "./page.module.css";

const foodCollectionRequests = [
  {
      id: '1',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '2',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '3',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '4',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '5',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '6',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '7',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '8',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '9',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
  {
      id: '10',
      date: '01/01/2024',
      requester: "Andrews Kwesi Ankomahene",
      requesterEmail: "andrewskwesiankomahene@gmail.com",
      collector: "Steven de Koffi Konan",
      collectorEmail: 'stevenkonan@meltware.org',
  },
];

export default function Home() {
  return (
    <main className={classes.main}>
      <Container size="xl" bg="transparent">
        <Container bg="transparent" fluid px="xs" mb="xl">
          <Title order={2}>Good morning Chef</Title>
        </Container>

        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
          // bg="red"
          px="sm"
          className={classes.simpleGrid}
        >
          <Paper shadow="xs" withBorder p="xl" radius="md">
            <Title order={3} c="cyan.6">EIT Directory</Title>
          </Paper>

          <Stack
            justify="flex-start"
            gap="xl"
          >
            <Card withBorder radius="md" p="xl" className={classes.requestCount}>
              <Title order={3}>Total number of meal pick up requests</Title>

              <Text ta="center" fz={60} mt="xs">
                14
              </Text>
            </Card>

            <Paper shadow="xs" withBorder p="xl" radius="md">
              <Title order={3} c="cyan.6">Meal pickup requests</Title>

              <Container fluid p={0}>
                {/* <Group
                  gap="xl"
                  grow
                  mt="sm"
                  c="cyan.6"
                >
                  <Text>Date</Text>
                  <Text>EIT Name</Text>
                  <Text>EIT Picking</Text>
                </Group> */}

                <Container mt="sm" fluid p={0}>
                  <CustomTable data={foodCollectionRequests} />
                </Container>
              </Container>

            </Paper>
          </Stack>

        </SimpleGrid>
      </Container>
    </main>
  );
}
