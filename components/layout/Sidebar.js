'use client';
import { useState } from 'react';
import {
  IconBellRinging,
  IconListDetails,
  IconBrandGoogleAnalytics,
  IconUsers,
  IconFriends,
} from '@tabler/icons-react';
import classes from '@/styles/Sidebar.module.css';
import Link from 'next/link';
import { Card, Group, Avatar, Text } from '@mantine/core';

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconBellRinging },
  { link: '/members', label: 'Members', icon: IconFriends },
  { link: '', label: 'Requests', icon: IconListDetails },
  { link: '', label: 'Reports', icon: IconBrandGoogleAnalytics },
  { link: '', label: 'Staff', icon: IconUsers },
];

export function Sidebar() {
  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <Card shadow="xs" padding="sm" radius="sm" withBorder>
        <Group justify="flex-start" gap="sm">
          <Avatar color="cyan.6" variant="light" alt="Hello" radius="xl" size="md">M</Avatar>

          <Text fw={600} size="lg" truncate>
            MEST Kitchen
          </Text>
        </Group>
      </Card>

      <div className={classes.navbarMain}>
        {links}
      </div>
    </nav>
  );
}