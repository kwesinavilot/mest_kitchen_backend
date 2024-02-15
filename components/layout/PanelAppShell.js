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
            header={{ height: 70 }}
            navbar={{ width: 270, breakpoint: 'sm' }}
            padding="30"
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