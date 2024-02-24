import cx from 'clsx';
import { useState } from 'react';
import { Container, Group, Text, Avatar, UnstyledButton, Menu, rem } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import {
    IconLogout,
    IconCoins,
    IconSettings,
    IconChevronDown,
    IconUsers,
} from '@tabler/icons-react';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    return (
        <header className={classes.header}>
            <Container fluid className={classes.inner}>
                <Link href="/dashboard" className={classes.link}>
                    <Text fw='bold' c="cyan.6" size="xl">Choplog</Text>
                </Link>

                <Menu
                    width={200}
                    position="bottom-end"
                    transitionProps={{ transition: 'pop-top-right' }}
                    onClose={() => setUserMenuOpened(false)}
                    onOpen={() => setUserMenuOpened(true)}
                    withinPortal
                >
                    <Menu.Target>
                        <UnstyledButton
                            className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                        >
                            <Group gap="sm">
                                <Avatar src="../../assets/headshot.png" variant="outline" alt="Hello" radius="xl" size="md" />

                                <Text fw={600} c="cyan.6" size="md" lh={1}>
                                    Felicia Vinyl
                                </Text>

                                <IconChevronDown style={{ width: rem(15), height: rem(15) }} stroke={2} />
                            </Group>
                        </UnstyledButton>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label>Organisation</Menu.Label>
                        <Menu.Item
                            leftSection={
                                <IconCoins style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                            }
                        >
                            Billing
                        </Menu.Item>

                        <Menu.Item
                            leftSection={
                                <IconUsers style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                            }
                        >
                            Team
                        </Menu.Item>

                        <Menu.Divider />
                        <Menu.Label>Account</Menu.Label>
                        <Menu.Item
                            leftSection={
                                <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                            }
                        >
                            Account Settings
                        </Menu.Item>

                        <Menu.Divider />

                        <Menu.Item
                            leftSection={
                                <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                            }
                        >
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Container>
        </header>
    );
}