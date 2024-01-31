'use client';

import { Container, SimpleGrid, Card, Text, Avatar, Button, Title, Group, Stack, Table, ActionIcon, rem, Center, Paper } from "@mantine/core";

import { IconAt, IconPhoneCall, IconWorldPin, IconPlus, IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

import classes from "./Members.module.css";

const preferenceList = [
    ,
    {
        id: "0001",
        preference: "Pepper free food",
    },
    {
        id: "0002",
        preference: "Onion free",
    },
    {
        id: "0003",
        preference: "Lactose Intollerant",
    }
];

export default function Member() {
    const preferences = preferenceList.map((item) => {
        return (
            <Table.Tr key={item.id} className={classes.trow}>
                <Table.Td>
                    <Text truncate="end" fz="md" fw={500}>{item.preference}</Text>
                </Table.Td>

                <Table.Td>
                    <Group gap={0} justify="flex-end">
                        <ActionIcon variant="subtle" size="lg" color="gray">
                            <IconPencil style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>

                        <ActionIcon variant="subtle" size="lg" color="red">
                            <IconTrash style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                        </ActionIcon>
                    </Group>
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <main className={classes.main}>
            <Container size="xl" bg="transparent">
                <SimpleGrid
                    cols={{ base: 1, sm: 2 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                    px="sm"
                    className={classes.simpleGrid}
                >
                    <Card withBorder radius="md" bg="cyan.6" p={0} c="white">
                        <Center h="100%">
                            <Group justify="center" gap="xl" wrap="nowrap">
                                <Avatar
                                    src="../../assets/headshot.png"
                                    size={130}
                                    radius={130}
                                    color="white"
                                    variant="outline"
                                />

                                <Stack gap={0}>
                                    <Text fz="xl" fw={500} className={classes.name}>
                                        Andrews Kwesi Ankomahene
                                    </Text>

                                    <Group wrap="nowrap" gap={10} mt={3}>
                                        <IconWorldPin stroke={1.5} size="1.2rem" />
                                        <Text fz="md">
                                            Ghanaian
                                        </Text>
                                    </Group>

                                    <Group wrap="nowrap" gap={10} mt={3}>
                                        <IconAt stroke={1.5} size="1.2rem" />
                                        <Text fz="md">
                                            andrews.ankomahene@meltwater.org
                                        </Text>
                                    </Group>

                                    <Group wrap="nowrap" gap={10} mt={5}>
                                        <IconPhoneCall stroke={1.5} size="1.2rem" />
                                        <Text fz="md">
                                            0541173963
                                        </Text>
                                    </Group>
                                </Stack>
                            </Group>
                        </Center>
                    </Card>

                    <Card withBorder radius="md" p="xl">
                        <Group justify="space-between" mb="md">
                            <Title order={3} c="cyan.6">Dietary Requirements</Title>

                            <Button
                                component={Link}
                                href="/"
                                leftSection={<IconPlus size={14} />}
                                size="md"
                            >
                                Add New
                            </Button>
                        </Group>

                        <Table
                            highlightOnHover
                            stickyHeader
                            withRowBorders={false}
                            horizontalSpacing="xs"
                            verticalSpacing="xs"
                        >
                            <Table.Tbody>
                                {preferences}
                            </Table.Tbody>
                        </Table>
                    </Card>
                </SimpleGrid>
            </Container>
        </main>
    );
};