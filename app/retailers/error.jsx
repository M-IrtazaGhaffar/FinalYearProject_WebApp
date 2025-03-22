"use client"
import { Flex } from '@chakra-ui/react'
import React from 'react'

function error() {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh">
        <Text>Sorry for Inconvinence. | Some Error Occured!</Text>
    </Flex>
  )
}

export default error