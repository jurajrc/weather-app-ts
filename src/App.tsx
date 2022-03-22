import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
// local data
import { coordsTown } from './coordsTown';
// api
import { api_geo, api_coord } from './api';
// Components
import Home from './pages/Home';
import SearchForm from './pages/SearchForm';
// Style
import GlobalStyle from './components/GlobalStyle';
// Animation
import { AnimatePresence } from 'framer-motion';
// Images
import graphic_w511 from './assets/grafic-511x413.webp'
import graphic_w1080 from './assets/grafic-1080x607.webp'
import graphic_w1920 from './assets/grafic-1920x1080.webp'
// Types
import { CoordTown, CoordsMyTowns, WeatherData, CurrentTemp } from './types'

interface IState {
  coord: CoordTown;
  location: string;
  foundData: WeatherData | null;
  findTowns: CoordsMyTowns[];
  resetTowns: CoordsMyTowns[];
  size: number[];
}


function App() {

  const [coord, setCoord] = useState<IState['coord']>({town: 'Košice', lat: 48.717, lon: 21.250, country: 'SK'})
  const [location, setLocation] = useState<IState['location']>("")
  const [foundData, setFoundData] = useState<IState['foundData']>(null)
  const [findTowns, setFindTowns] = useState<IState['findTowns']>(coordsTown)
  const [resetTowns, setResetTowns] = useState<IState['resetTowns']>(coordsTown)
  const [size, setSize] = useState<IState['size']>([ window.innerWidth])


  useEffect(() => {
    getData(coord)
  },[coord])

  useEffect(() => {
    getCoords(location)
  }, [location])

  // state resize
  function useWindowSize() {
    useEffect(() => {
      const handleResize = () => {
        setSize([ window.innerWidth])
      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    })
  return size
  }
  const [sizeWidth] = useWindowSize()

  /////////////////

    // get temps for my towns
    useEffect(() => {
      getTemp(coordsTown)
    }, [])
  
    const getTemp = async (myTowns: CoordsMyTowns[]) => {
      let currentData: [] | CurrentTemp[] = []
  
      for(let i = 0; i < myTowns.length; i++) {
        await axios.get(api_coord(myTowns[i]))
      .then(data => {
        const currentTemp = Math.round(data.data.current.temp)
        const newtown: CurrentTemp = { town: myTowns[i].town, lat: myTowns[i].lat, lon: myTowns[i].lon, temp: currentTemp }

        currentData = [...currentData, newtown]
      })
      .catch(err => console.log(err))
      
      }
      setFindTowns(currentData)
      setResetTowns(currentData)
    }

  /////////////////
  
  const getData = async (coord: CoordTown) => {
    await axios.get(api_coord(coord))
    .then(data => {
      console.log(data.data);
      const newData = data.data
      const filterData: WeatherData = {
        skyImg: newData.current.weather[0].icon,
        skyMain: newData.current.weather[0].main,
        currentTemp: newData.current.temp,
        tempMax: newData.daily[0].temp.max,
        tempMin: newData.daily[0].temp.min,
        humidity: newData.current.humidity,
        pressure: newData.current.pressure,
        windSpeed: newData.current.wind_speed,
        sunrise: newData.current.sunrise,
        sunset: newData.current.sunset,
        forecast: [
          { 
            img: newData.daily[1].weather[0].icon,
            date: newData.daily[1].dt,
            maxTemp: newData.daily[1].temp.max,
            minTemp: newData.daily[1].temp.min
          },{
            img: newData.daily[2].weather[0].icon,
            date: newData.daily[2].dt,
            maxTemp: newData.daily[2].temp.max,
            minTemp: newData.daily[2].temp.min
          },{
            img: newData.daily[3].weather[0].icon,
            date: newData.daily[3].dt,
            maxTemp: newData.daily[3].temp.max,
            minTemp: newData.daily[3].temp.min
          }
        ]
      }
      setFoundData(filterData)
    }).catch(err => console.log(err))
  }

  // response data coords specific location
  const getCoords = async (term: string) => {
    await axios.get(api_geo(term))
    .then(data => {
      console.log(data.data);
      if(data.data[0].name !== undefined) {
        setCoord({
          town: data.data[0].name,
          lat: data.data[0].lat.toFixed(3),
          lon: data.data[0].lon.toFixed(3),
          country: data.data[0].country
        })
      } else {
        alert("Zadané mesto "+ term +" sa nenachádza v databáze")
      }
    }).catch(err => console.log(err))
  }

  // filtered from my towns and upgrade state findTowns
  const filterTown = (e: string) => {
    const filter = resetTowns.filter(item => item.town.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
    setFindTowns(filter)
  }
  
  return (
    <>
      <GlobalStyle />
      <div className="App">
        
      <div className="background">
        <picture>
          <source media='(max-width: 500px)' srcSet={graphic_w511} width="511" height="413" />
          <source media='(max-width: 1000px)' srcSet={graphic_w1080} width="1080" height="607" />
          <img src={graphic_w1920} alt="pozadie" width="1920" height="1080" />
        </picture>
      </div>

      <AnimatePresence>
        <Routes>
          <Route path='/' element={ <Home 
            coord={coord}
            foundData={foundData}
            setFindTowns={setFindTowns}
            resetTowns={resetTowns}
          /> } />
          <Route path='/search' element={ <SearchForm 
            findTowns={findTowns}
            filterTown={filterTown}
            setLocation={setLocation}
            sizeWidth={sizeWidth}
          /> } />
        </Routes>
      </AnimatePresence>

      </div>
    </>
  );
}

export default App;
