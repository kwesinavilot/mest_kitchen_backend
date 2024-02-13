
'use client';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '@/app/(auth)/auth.module.css';

export default function LoginPage() {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            remember: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    return (
        <main>
            <Container size={450} my="8%">
                <Title ta="center" className={classes.title}>
                    Welcome back!
                </Title>

                <Text c="dimmed" size="md" ta="center" mt={5}>
                    Do not have an account yet?{' '}
                    <Anchor size="md" component="button">
                        Create account
                    </Anchor>
                </Text>

                <form onSubmit={form.onSubmit(() => { })}>
                    <Paper withBorder shadow="md" p={30} mt={35} radius="md">
                        <TextInput
                            label="Email"
                            placeholder="adwoa.mansa@org.com"
                            required
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                        />

                        <PasswordInput
                            label="Password"
                            placeholder="Your password"
                            required
                            mt="md"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                        />

                        <Group justify="space-between" mt="lg">
                            <Checkbox
                                defaultChecked
                                label="Remember me"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />

                            <Anchor component="button" size="sm">
                                Forgot password?
                            </Anchor>
                        </Group>

                        <Button type="submit" fullWidth mt="xl">
                            Log In
                        </Button>
                    </Paper>
                </form>
            </Container>
        </main>
    );
}