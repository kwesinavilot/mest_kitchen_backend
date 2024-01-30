import { Container, SimpleGrid } from "@mantine/core";

import classes from "./Members.module.css";

export default function Member() {
    return (
        <main className={classes.main}>
            <Container size="xl" bg="transparent">
                <h1>Hello World</h1>

                <SimpleGrid
                    cols={{ base: 1, sm: 2 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                    // bg="red"
                    px="sm"
                    className={classes.simpleGrid}
                >

                </SimpleGrid>
            </Container>
        </main>
    );
};