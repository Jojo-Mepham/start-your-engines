import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { getDragRaceSeasons } from '../apiClient'
import { Grid, GridItem, Button } from '@chakra-ui/react'

export default function Seasons() {
  const [seasons, setSeasons] = useState([])
  const [selected, setSelected] = useState([])
  console.log(selected)
  seasons.sort((a, b) => a.id - b.id)
  selected.sort((a, b) => a.place - b.place)

  useEffect(() => {
    getDragRaceSeasons()
      .then((selectedData) => {
        selectedData === setSelected(selectedData)
          ? setSelected(selectedData)
          : null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

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

  // const showQueens = (seasons) => {
  //   selected === setSelected(seasons.queen) ? setSelected(seasons.queen) : null
  // }

  return (
    <>
      <Grid templateColumns="20% auto">
        <GridItem pl="1">
          {seasons.map((season) => {
            return (
              <ul className="nobull" key={season.id}>
                <li>
                  <input
                    type="radio"
                    name="season"
                    value={season.seasonNumber}
                    onChange={() => setSelected(season.queens)}
                  />
                  <h2 style={{ display: 'inline' }}>
                    Season {season.seasonNumber}
                  </h2>
                </li>
              </ul>
            )
          })}
        </GridItem>
        <GridItem pl="2">
          {selected.map((check) => {
            return (
              <ul className="nobull" key={check.id}>
                <li>
                  <input type="checkbox" name="queen" />
                  <h2 style={{ display: 'inline' }}> {check.name} </h2>
                  <Button bg="#FF5ED5" color="white" size="xs">
                    Add
                  </Button>
                </li>
              </ul>
            )
          })}
        </GridItem>
      </Grid>
    </>
  )
}
