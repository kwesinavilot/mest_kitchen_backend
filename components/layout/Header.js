import { Container, Group, Text, Avatar, UnstyledButton, } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import Link from 'next/link';

export function Header() {
    return (
        <header className={classes.header}>
            <Container fluid bg="white" className={classes.inner}>
                <Link href="/dashboard" className={classes.link}>
                    <Text fw='bold' c="cyan.6" size="lg">
                        Choplog: MEST Kitchen
                    </Text>
                </Link>

                <UnstyledButton
                    className={classes.user}
                >
                    <Group justify="flex-start" gap="sm">
                        <Avatar src="../../assets/headshot.png" variant="outline" alt="Hello" radius="xl" size="md" />

                        <Text fw={500} c="cyan.6" size="sm" lh={1}>
                            Felicia Vinyl
                        </Text>
                    </Group>
                </UnstyledButton>
            </Container>
        </header>
    );
}