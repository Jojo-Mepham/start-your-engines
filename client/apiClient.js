import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getHeader() {
  return request.get(`${serverURL}/Header`).then((response) => response.body)
}
// ***   ***   ***

export function getDragRaceQueens() {
  return request.get(`${serverURL}/queens`).then((response) => response.body)
}
