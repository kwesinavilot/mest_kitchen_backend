import { Container, Title, SimpleGrid, Card, Group, Paper, Text, Stack } from "@mantine/core";
import { CustomTable } from "@/components/mass/RequestTable";
import { EITListing } from "@/components/mass/EITListings";

import classes from "./Homepage.module.css";

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

const eitDirectory = [
  {
      avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
      name: 'Andrews Kwesi Ankomahene',
      email: 'andrews.ankomahene@meltwater.com',
      level: 'regular',
  },
  {
      avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
      name: 'Obehi Omo-Ataga',
      email: 'obehi.omoataga@meltwater.com',
      level: 'strict',
  },
  {
      avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
      name: 'Savlin Wachire',
      email: 'savlin.wachire@meltwater.com',
      level: 'regular',
  },
  {
      avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
      name: 'Mohammadou Kaba',
      email: 'mohammadou.kaba@meltwater.com',
      level: 'serious',
  },
  {
      avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
      name: 'Suad Abdulraman',
      email: 'suad.adbulraman@meltwater.com',
      level: 'regular',
  },
  {
    avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Andrews Kwesi Ankomahene',
    email: 'andrews.ankomahene@meltwater.com',
    level: 'regular',
},
{
    avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    name: 'Obehi Omo-Ataga',
    email: 'obehi.omoataga@meltwater.com',
    level: 'strict',
},
{
    avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Savlin Wachire',
    email: 'savlin.wachire@meltwater.com',
    level: 'regular',
},
{
    avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Mohammadou Kaba',
    email: 'mohammadou.kaba@meltwater.com',
    level: 'serious',
},
{
    avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
    name: 'Suad Abdulraman',
    email: 'suad.adbulraman@meltwater.com',
    level: 'regular',
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

            <Container mt="sm" fluid p={0}>
              <EITListing data={eitDirectory} />
            </Container>
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

              <Container mt="sm" fluid p={0}>
                <CustomTable data={foodCollectionRequests} />
              </Container>
            </Paper>
          </Stack>
        </SimpleGrid>
      </Container>
    </main>
  );
}
