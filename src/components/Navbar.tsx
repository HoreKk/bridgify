'use client';

import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuShapes } from 'react-icons/lu';

const Navbar = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" px={8} py={5}>
      <Link as={NextLink} href="/" _focus={{ outline: 'none' }}>
        <Icon as={LuShapes} w={7} h={7} />
      </Link>
      <Flex alignItems="center" gap={6} color="primary">
        <Link as={NextLink} href="/about" _focus={{ outline: 'none' }}>
          <Text fontWeight={500}>Features</Text>
        </Link>
        <Link as={NextLink} href="/about" _focus={{ outline: 'none' }}>
          <Text fontWeight={500}>Showcase</Text>
        </Link>
        <Link as={NextLink} href="/about" _focus={{ outline: 'none' }}>
          <Text fontWeight={500}>About</Text>
        </Link>
        <Link as={NextLink} href="/about" _focus={{ outline: 'none' }}>
          <Text fontWeight={500}>Contact</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
