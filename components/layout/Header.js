import { Container, Group, Text, Avatar, UnstyledButton, cx } from '@mantine/core';
import classes from '../../styles/Header.module.css';

export function Header() {
    return (
        <header className={classes.header}>
            <Container size="xl" bg="cyan.6" className={classes.inner}>
                <Text fw='bold' c="white" size="lg">
                    MEST Kitchen
                </Text>

                <UnstyledButton
                    className={classes.user}
                >
                    <Group gap={7}>
                        <Avatar src="../../assets/headshot.png" variant="outline" alt="Hello" radius="xl" size="md" />

                        <Text fw={500} size="sm" lh={1} mr={3}>
                            Chef Vinyl
                        </Text>
                    </Group>
                </UnstyledButton>
            </Container>
        </header>
    );
}