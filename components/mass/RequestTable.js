'use client';

import { Table, ScrollArea, Text, } from '@mantine/core';
import Link from 'next/link';

import classes from '@/styles/Table.module.css';

export function CustomTable({data}) {
    const rows = data.map((item) => {
        return (
            <Table.Tr key={item.id} className={classes.trow}>
                <Table.Td>
                    <Link href={`/`} className={classes.link}>
                    <Text truncate="end" fz="md" fw={500}>{item.date}</Text>
                    </Link>
                </Table.Td>

                <Table.Td>
                    <Link href={`/`} className={classes.link}>
                        <Text truncate="end" fz="md" fw={500}>{item.requester}</Text>
                        <Text truncate="end" fz="xs" c="dimmed">{item.requesterEmail}</Text>
                    </Link>
                </Table.Td>

                <Table.Td>
                    <Link href={`/`} className={classes.link}>
                        <Text truncate="end" fz="md" fw={500}>{item.collector}</Text>
                        <Text truncate="end" fz="xs" c="dimmed">{item.collectorEmail}</Text>
                    </Link>
                </Table.Td>
            </Table.Tr>
        );
    });

    return (
        <ScrollArea h={400} offsetScrollbars>
            <Table
                highlightOnHover
                stickyHeader
                withRowBorders={false}
                horizontalSpacing="xs"
                verticalSpacing="md"
            >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th className={classes.thead}>Date</Table.Th>
                        <Table.Th className={classes.thead}>EIT Name</Table.Th>
                        <Table.Th className={classes.thead}>EIT Picking</Table.Th>
                    </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    {rows}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}