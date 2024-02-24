import { Container, Title, SimpleGrid, Card, Group, Paper, Text, Stack } from "@mantine/core";
import { CustomTable } from "@/components/mass/RequestTable";
import { EITListing } from "@/components/mass/EITListings";

import classes from "../panel.module.css";

import { greet } from "@/engine/Essentials";

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

const greeting = greet();

export default function Dashboard() {
  return (
    <Container size="xl" bg="transparent">
      <Container bg="transparent" fluid px="xs" mb="xl">
        <Title order={2}>{greeting}, Felicia</Title>
      </Container>

      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
        px="sm"
        className={classes.simpleGrid}
      >
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
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
