import { Container, Text } from '@mantine/core';
import classes from '../../styles/Footer.module.css';

export function Footer() {
    return (
        <div className={classes.footer}>
            <Container size="xl" className={classes.inner}>
                <Text c="dimmed" size="sm">
                    MVP Team
                </Text>

                <Text c="dimmed" size="sm">
                    © 2024 All rights reserved.
                </Text>
            </Container>
        </div>
    );
}