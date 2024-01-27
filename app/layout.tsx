import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Footer } from '@/components/layout/Footer';

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
      <body>
        <MantineProvider
          theme={{
            colors: {
              'ocean-blue': ['#3BC9DB', '#22B8CF', '#15AABF', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
            },
            primaryColor: 'ocean-blue',
          }}
        >
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}