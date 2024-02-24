'use client';
import cx from 'clsx';
import { Container, SimpleGrid, ScrollArea, Card, Text, Avatar, Button, Title, Group, Stack, Table, ActionIcon, rem, Center } from "@mantine/core";
import { IconAt, IconPhoneCall, IconWorldPin, IconPlus, IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";
import globalStyles from "@/styles/Globals.module.css";
import classes from "../Members.module.css";
import tableStyles from "@/styles/Table.module.css";

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

const requestsList = [
    {
        id: '1',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '2',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '3',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '4',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '5',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '6',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '7',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '8',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '9',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
    {
        id: '10',
        date: '01/01/2024',
        collector: "Steven de Koffi Konan",
        collectorEmail: 'stevenkonan@meltware.org',
        collectorContact: '0541173963',
    },
];

export default function MemberDetails() {
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

    const requests = requestsList.map((item) => {
        return (
            <Table.Tr key={item.id} className={classes.trow}>
                <Table.Td>
                    <Text truncate="end" fz="md" fw={500}>{item.date}</Text>
                </Table.Td>

                <Table.Td>
                    <Text truncate="end" fz="md" fw={500}>{item.collector}</Text>
                </Table.Td>

                <Table.Td>
                    <Text truncate="end" fz="md">{item.collectorEmail}</Text>
                </Table.Td>

                <Table.Td>
                    <Text truncate="end" fz="md">{item.collectorContact}</Text>
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <main className={classes.main}>
            <Container size="xl" bg="transparent">
                <Title order={3}>Member: </Title>

                <Container p={0} mt="xl" size="xl" bg="transparent" className={globalStyles.spaceup}>
                    <SimpleGrid
                        cols={{ base: 1, sm: 2 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                        px={0}
                        className={cx(classes.simpleGrid, globalStyles.spaceup)}
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

                    <Card withBorder radius="md" p="xl">
                        <Title order={3} c="cyan.6">Pickup Requests</Title>

                        <ScrollArea h={500} offsetScrollbars>
                            <Table
                                highlightOnHover
                                stickyHeader
                                withRowBorders={false}
                                horizontalSpacing="xs"
                                verticalSpacing="md"
                            >
                                <Table.Thead>
                                    <Table.Tr>
                                        <Table.Th fz="md" className={tableStyles.thead}>Date</Table.Th>
                                        <Table.Th fz="md" className={tableStyles.thead}>Collector</Table.Th>
                                        <Table.Th fz="md" className={tableStyles.thead}>Email</Table.Th>
                                        <Table.Th fz="md" className={tableStyles.thead}>Contact</Table.Th>
                                    </Table.Tr>
                                </Table.Thead>

                                <Table.Tbody>
                                    {requests}
                                </Table.Tbody>
                            </Table>
                        </ScrollArea>
                    </Card>
                </Container>
            </Container>
        </main>
    );
};