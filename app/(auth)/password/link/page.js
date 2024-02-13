'use client';
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '@/app/(auth)/auth.module.css';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function GetResetLink() {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
    },
  });

  return (
    <main>
      <Container size={460} my="10%">
        <Title className={classes.title} ta="center">
          Forgot your password?
        </Title>

        <Text c="dimmed" size="md" ta="center" mt="md">
          Enter your email to get a reset link
        </Text>

        <form onSubmit={form.onSubmit(() => { })}>
          <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <TextInput
              label="Email"
              placeholder="adwoa.mansa@org.com"
              required
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}

            />

            <Group justify="space-between" mt="lg" className={classes.controls}>
              <Anchor component={Link} href="/login" c="dimmed" size="sm" className={classes.control}>
                <Center inline>
                  <IconArrowLeft style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                  
                  <Box ml={5}>Back to the login page</Box>
                </Center>
              </Anchor>

              <Button type="submit" className={classes.control}>Reset password</Button>
            </Group>
          </Paper>
        </form>
      </Container>
    </main>
  );
}