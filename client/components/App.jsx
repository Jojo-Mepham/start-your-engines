import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Grid, GridItem } from '@chakra-ui/react'

import Header from './Header.jsx'
import Nav from './Nav.jsx'
import AllQueens from './GetQueens.jsx'
import Seasons from './Seasons.jsx'

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "nav" "main"`,
          lg: `"header header"
                  "nav main"
                  "nav main"`,
        }}
        gridTemplateRows={'auto auto auto'}
        gridTemplateColumns={{ base: 'auto', lg: 'auto 1fr' }}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="	#4d4249" area={'header'}>
          <Header />
        </GridItem>
        <GridItem pl="2" bg="	#ff5ed5" area={'nav'}>
          <Nav />
        </GridItem>
        <GridItem pl="2" bg="	#59c9c5" area={'main'}>
          <div>
            <Routes>
              <Route path="/queens" element={<AllQueens />} />
              <Route path="/seasons" element={<Seasons />} />
            </Routes>
          </div>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
