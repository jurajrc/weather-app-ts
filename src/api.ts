import { CoordTown } from "./types"

const BASE_URL: string = process.env.REACT_APP_BASE_API as string
const API_KEY: string = process.env.REACT_APP_API_KEY as string

// response coords specified town
export const api_geo = (term: string) => `${BASE_URL}/geo/1.0/direct?q=${term}&limit=1&appid=${API_KEY}`

// response detail weather by specified coords
export const api_coord = (coords: CoordTown) => `${BASE_URL}data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&appid=${API_KEY}&units=metric&lang=en`