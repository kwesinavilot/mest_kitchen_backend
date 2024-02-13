import classes from '../globals.module.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
    title: 'Auth',
    description: 'This is the auth section',
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>

            <body className={classes.body}>
                <MantineProvider
                    theme={{
                        primaryColor: 'brand',
                        colors: {
                            'brand': ['#3BC9DB', '#22B8CF', '#15AABF', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
                        },
                    }}
                >
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}