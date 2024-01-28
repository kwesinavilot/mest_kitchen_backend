import { Container, Title, SimpleGrid, Skeleton, Grid, rem, Paper, Text } from "@mantine/core";
import classes from "./page.module.css";

const PRIMARY_COL_HEIGHT = rem(300);

export default function Home() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

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

          <Paper shadow="xs" withBorder p="xl" radius="md">
            <Text>Paper is the most basic ui component</Text>
            <Text>
              Use it to create cards, dropdowns, modals and other components that require background
              with shadow
            </Text>
          </Paper>
        </SimpleGrid>
      </Container>
    </main>
  );
}
