'use client';

import { Box, Button, Center, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { LuArrowRight } from 'react-icons/lu';

export default function Page() {
  return (
    <Box minH="inherit">
      <Center minH="inherit" flexDir="column" textAlign="center" my="auto">
        <Heading size="6xl" fontWeight={800}>
          Connect. Create. Innovate.
        </Heading>
        <Text fontSize={20} color="gray.emphasize" mt={2} w={{ base: '85%', md: '60%' }} mx="auto">
          Join a community where developers and designers collaborate on exciting projects, improve
          their skills, and showcase their talent.
        </Text>
        <Button mt={8} size="lg" px={8}>
          Get Started
          <Icon as={LuArrowRight} w={4} h={4} />
        </Button>
      </Center>
    </Box>
  );
}
