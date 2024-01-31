'use client';

import { Avatar, ScrollArea, Table,Badge, Text } from '@mantine/core';

import Link from 'next/link';

import classes from '@/styles/Table.module.css';

const levelColors = {
    regular: 'blue',
    serious: 'cyan',
    strict: 'pink',
};

export function EITListing({ data }) {
    const rows = data.map((item) => (
        <Table.Tr key={item.name}>
            <Table.Td>
                <Link href={`/members`} className={classes.link}>
                    <Avatar size={40} src={item.avatar} radius={40} />
                </Link>
            </Table.Td>

            <Table.Td>
                <Link href={`/members`} className={classes.link}>
                    <Text fz="sm" fw={500}>
                        {item.name}
                    </Text>

                    <Text fz="xs" c="dimmed">{item.email}</Text>
                </Link>
            </Table.Td>

            <Table.Td>
                <Link href={`/members`} className={classes.link}>
                    <Badge color={levelColors[item.level]} variant="light">
                        {item.level.toUpperCase()}
                    </Badge>
                </Link>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea h={630} offsetScrollbars>
            <Table
                highlightOnHover
                stickyHeader
                withRowBorders={false}
                horizontalSpacing="xs"
                verticalSpacing="md"
            >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th className={classes.thead}></Table.Th>
                        <Table.Th className={classes.thead}>Full Name</Table.Th>
                        <Table.Th className={classes.thead}>Preference Level</Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}