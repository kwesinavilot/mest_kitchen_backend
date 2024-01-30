import { Container, SimpleGrid, Card, Text, Avatar, Center, Group, Stack } from "@mantine/core";

import { IconAt, IconPhoneCall, IconWorldPin } from "@tabler/icons-react";

import classes from "./Members.module.css";

export default function Member() {
    return (
        <main className={classes.main}>
            <Container size="xl" bg="transparent">
                <SimpleGrid
                    cols={{ base: 1, sm: 2 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                    // bg="red"
                    px="sm"
                    className={classes.simpleGrid}
                >
                    <Card withBorder radius="md" p="xl" bg="cyan.6" c="white">
                        <Group justify="center" gap="xl" wrap="nowrap">
                            <Avatar
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                                size={130}
                                radius={130}
                            />

                            <Stack gap={0}>
                                <Text fz="xl" fw={500} className={classes.name}>
                                    Robert Glassbreaker
                                </Text>

                                <Group wrap="nowrap" gap={10} mt={3}>
                                    <IconWorldPin stroke={1.5} size="1.2rem" />
                                    <Text fz="md">
                                        Kenyan
                                    </Text>
                                </Group>

                                <Group wrap="nowrap" gap={10} mt={3}>
                                    <IconAt stroke={1.5} size="1.2rem" />
                                    <Text fz="md">
                                        robert@glassbreaker.io
                                    </Text>
                                </Group>

                                <Group wrap="nowrap" gap={10} mt={5}>
                                    <IconPhoneCall stroke={1.5} size="1.2rem" />
                                    <Text fz="md">
                                        +11 (876) 890 56 23
                                    </Text>
                                </Group>
                            </Stack>
                        </Group>
                    </Card>
                </SimpleGrid>
            </Container>
        </main>
    );
};