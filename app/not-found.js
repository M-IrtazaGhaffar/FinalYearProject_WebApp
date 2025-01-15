import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh" gap={4}>
        <Text>Sorry for Inconvinence</Text>
        <Text fontSize={'4xl'} fontWeight={'bold'} color={'#199A8E'}>404</Text>
        <Text>Some Error Occured</Text>
    </Flex>
  )
}