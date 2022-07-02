import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <h2>Now Sissy That Walk</h2>
      <ul>
        <li key="/">
          <Link to="/queens">Queens</Link>
        </li>
        <li key="/seasons">
          <Link to="/seasons">Seasons</Link>
        </li>
      </ul>
    </>
  )
}
export default Nav
