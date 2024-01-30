'use client';

import { Avatar, ScrollArea, Table, Group, Badge, Text, ActionIcon, Menu, rem } from '@mantine/core';
import {
    IconPencil,
    IconTrash,
    IconDots,
    IconEye
} from '@tabler/icons-react';
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

            {/* <Table.Td>
                <Group gap={0} justify="flex-end">
                    <ActionIcon variant="subtle" color="gray">
                        <IconEye style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </ActionIcon>

                    <Menu
                        transitionProps={{ transition: 'pop' }}
                        withArrow
                        position="bottom-end"
                        withinPortal
                    >
                        <Menu.Target>
                            <ActionIcon variant="subtle" color="gray">
                                <IconDots style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                            </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={
                                    <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                                }
                            >
                                Edit Details
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                                color="red"
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
            </Table.Td> */}
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