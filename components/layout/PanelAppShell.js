'use client';
import '@mantine/core/styles.css';
import { AppShell, Burger } from '@mantine/core';
// import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { useDisclosure } from '@mantine/hooks';

export function PanelAppShell({children}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 72 }}
            navbar={{ width: 300, breakpoint: 'sm' }}
            padding="xl"
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Navbar>
                <Sidebar />
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}