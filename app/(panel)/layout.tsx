import classes from '@/styles/Globals.module.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { PanelAppShell } from '@/components/layout/PanelAppShell';

export const metadata = {
  title: 'MEST Kitchen',
  description: 'This is the MEST Kitchen app',
};

export default function RootLayout({
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
          <PanelAppShell children={children} />
        </MantineProvider>
      </body>
    </html>
  );
}