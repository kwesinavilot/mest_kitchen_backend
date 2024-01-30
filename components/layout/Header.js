import { Container, Group, Text, Avatar, UnstyledButton, } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import Link from 'next/link';

export function Header() {
    return (
        <header className={classes.header}>
            <Container size="xl" bg="cyan.6" className={classes.inner}>
                <Link href="/" className={classes.link}>
                    <Text fw='bold' c="white" size="lg">
                        Choplog: MEST Kitchen
                    </Text>
                </Link>

                <UnstyledButton
                    className={classes.user}
                >
                    <Group justify="flex-start" gap="sm">
                        <Avatar src="../../assets/headshot.png" variant="outline" alt="Hello" radius="xl" size="md" />

                        <Text fw={500} size="sm" lh={1}>
                            Chef Vinyl
                        </Text>
                    </Group>
                </UnstyledButton>
            </Container>
        </header>
    );
}