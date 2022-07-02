import React, { useEffect, useState } from 'react'

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
      <h1 className="headerfont">{headerStatement}</h1>
    </>
  )
}
