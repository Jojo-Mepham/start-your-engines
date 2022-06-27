import React, { useEffect, useState } from 'react'

import { Heading } from '@chakra-ui/react'

import { getHeader } from '../apiClient'

export default function Header() {
  const [headerStatement, setHeaderStatement] = useState('')

  useEffect(() => {
    getHeader()
      .then((res) => {
        setHeaderStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })
  return (
    <>
      <Heading>{headerStatement}</Heading>
    </>
  )
}
