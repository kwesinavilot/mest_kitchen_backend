import { Container, Title, SimpleGrid, Card, rem, Group, Paper, Text, Stack } from "@mantine/core";
import { CustomTable } from "@/components/mass/CustomTable";
import classes from "./page.module.css";

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
                  <CustomTable />
                </Container>
              </Container>

            </Paper>
          </Stack>

        </SimpleGrid>
      </Container>
    </main>
  );
}
