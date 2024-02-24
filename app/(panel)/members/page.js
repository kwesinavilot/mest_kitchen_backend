import { Container, Title, SimpleGrid, Paper, } from "@mantine/core";
import { EITListing } from "@/components/mass/EITListings";

import classes from "../panel.module.css";

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

export default function AllMembers() {
  return (
    <Container size="xl" bg="transparent">
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
        px="sm"
        className={classes.simpleGrid}
      >
        <Paper shadow="xs" withBorder p="xl" radius="md">
          <Title order={3} c="cyan.6">EIT Directory</Title>

          <Container mt="sm" fluid p={0}>
            <EITListing data={eitDirectory} />
          </Container>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
