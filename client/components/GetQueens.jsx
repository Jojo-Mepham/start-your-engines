import React, { useEffect, useState } from 'react'

import { getDragRaceQueens } from '../apiClient'

export default function AllQueens() {
  const [queens, setQueen] = useState([])

  useEffect(() => {
    getDragRaceQueens()
      .then((queenData) => {
        setQueen(queenData)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      {queens.map((queen) => {
        if (queen.winner === true)
          return (
            <div key={queen.id}>
              <img src={queen.image_url} width="200vw" height="auto"></img>
              <h1>{queen.name}</h1>
              <h3>{queen.quote}</h3>
            </div>
          )
      })}
    </>
  )
}
