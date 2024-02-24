import { Container, Title, SimpleGrid, Paper, } from "@mantine/core";
import { EITListing } from "@/components/mass/EITListings";

import { listMembers } from "@/engine/Members";
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

export default async function AllMembers() {
  const members = await listMembers();
  // console.log(members[0]);

  return (
    <Container size="xl" bg="transparent">
        <Title order={3}>EIT Directory</Title>

        <Paper shadow="xs" withBorder mt="xl" radius="md" py="lg" px={0}>
            <EITListing data={members} />
        </Paper>
    </Container>
  );
}
