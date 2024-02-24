import { Container, Title, SimpleGrid, Card, Group, Paper, Text, Stack } from "@mantine/core";

import classes from "../panel.module.css";

import { greet } from "@/engine/Essentials";
import { getTotalCollectionRequests } from "@/engine/Dashboard";

const greeting = greet();

export default async function Dashboard() {
  const totalRequest = await getTotalCollectionRequests();
  
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

            <Text ta="center" fz={60} mt="xs">{totalRequest}</Text>
          </Card>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}