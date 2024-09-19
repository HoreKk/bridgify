import Navbar from '@/components/Navbar';
import { Provider } from '@/components/ui/provider';
import { Container } from '@chakra-ui/react';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html className={`${GeistMono.variable} ${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <Container minH="calc(90vh - 68px)">{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
