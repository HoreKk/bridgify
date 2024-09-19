'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider } from './color-mode';
import { system } from '@/utils/chakra-theme';

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider enableSystem={false}>{props.children}</ColorModeProvider>
    </ChakraProvider>
  );
}
