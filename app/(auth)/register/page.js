
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
import Link from 'next/link';

export default function RegisterPage() {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            terms: true,
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
                    Welcome to ChopLog!
                </Title>

                <Text c="dimmed" size="md" ta="center" mt={5}>
                    Already have an account?{' '}
                    <Anchor size="md" component={Link} href="/login">
                        Login
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

                        <Checkbox
                            label="I accept terms and conditions"
                            checked={form.values.terms}
                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            mt="md"
                        />

                        <Button type="submit" fullWidth mt="xl">
                            Register
                        </Button>
                    </Paper>
                </form>
            </Container>
        </main>
    );
}