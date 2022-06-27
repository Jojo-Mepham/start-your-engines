import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { getDragRaceSeasons } from '../apiClient'
import { Heading } from '@chakra-ui/react'

export default function Seasons() {
  const [seasons, setSeasons] = useState([])
  console.log(seasons)

  useEffect(() => {
    getDragRaceSeasons()
      .then((seasonData) => {
        setSeasons(seasonData)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      {seasons.map((season) => {
        return (
          <div key={season.id}>
            {/* {/* <Heading>queen.season</Heading>
            <img src={season.image_url} width="200vw" height="auto"></img> */}
            <Heading>{season.name}</Heading>
          </div>
        )
      })}
    </>
  )
}
