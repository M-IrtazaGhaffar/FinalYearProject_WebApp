import Home from '@/components/app/Home'
import Search from '@/components/app/Search'
import { Box } from '@chakra-ui/react'
import React from 'react'

function page() {
  return (
    <Box>
      <Search />
      <Home />
    </Box>
  )
}

export default page