'use client';
import '@mantine/core/styles.css';
import { AppShell, Burger } from '@mantine/core';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { useDisclosure } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

export function PanelAppShell({children}) {
    const [opened, { toggle }] = useDisclosure();
    const currentPath = usePathname();

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
                <Sidebar activePath={currentPath} />
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}