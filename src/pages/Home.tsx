import React from 'react'
// Components
import Header from '../components/Header'
import Sky from '../components/weather/Sky'
import Temp from '../components/weather/Temp'
import TempMinMax from '../components/weather/TemplateMinMax'
import TemplateAnyWeather from '../components/weather/TemplateAnyWeather'
import TemplateForecast from '../components/weather/TemplateForecast'
// Style
import styled from 'styled-components'
// Animation
import  { motion } from 'framer-motion'
// Images
import humidity_img from '../assets/humidity.svg'
import barometer_img from '../assets/barometer.svg'
import wind_img from '../assets/wind-1.svg'
import sunrice_img from '../assets/sunrise.svg'
import sunset_img from '../assets/sunset.svg'
import sand_clock_img from '../assets/sand-clock.svg'
// Types
import { CoordTown, WeatherData, CoordsMyTowns } from '../types'
// Units
import { replaceComma, msTokmh, sunn, dayTime, dateDay } from '../units'

interface IProps {
    coord: CoordTown;
    foundData: WeatherData | null;
    setFindTowns: (findTowns: CoordsMyTowns[]) => void;
    resetTowns: CoordsMyTowns[];
}

const Home: React.FC<IProps> = ({ coord, foundData, setFindTowns, resetTowns }) => {
  return (
    <StyleHome
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.3 }}
    >

        <Header coord={coord} setFindTowns={setFindTowns} resetTowns={resetTowns} />

        <div className="results-weather">
            {foundData && 
                <div className="foundData">
                    <div className="row-01">
                        <Sky
                            img={foundData.skyImg} 
                            main={foundData.skyMain} 
                        />

                        <Temp temp={replaceComma(Math.round(foundData.currentTemp), '.', ',')} />

                        <TempMinMax 
                            max={Math.round(foundData.tempMax)}
                            min={Math.round(foundData.tempMin)} />
                    </div>

                    <div className="row-02">
                        <TemplateAnyWeather 
                            img={humidity_img}
                            value={foundData.humidity + "%"}
                            description="Humidity"
                        />    
                        <TemplateAnyWeather 
                            img={barometer_img}
                            value={replaceComma(foundData.pressure / 1000, '.', ',') + " mBar"}
                            description="Pressure"
                        />    
                        <TemplateAnyWeather 
                            img={wind_img}
                            value={msTokmh(foundData.windSpeed) + " km/h"}
                            description="Wind"
                        />    
                    </div>

                    <div className="row-03">
                        <TemplateAnyWeather 
                            img={sunrice_img}
                            value={sunn(foundData.sunrise)}
                            description="Sunrice"
                        /> 
                        <TemplateAnyWeather 
                            img={sunset_img}
                            value={sunn(foundData.sunset)}
                            description="Sunset"
                        /> 
                        <TemplateAnyWeather 
                            img={sand_clock_img}
                            value={dayTime(foundData.sunset, foundData.sunrise)}
                            description="Daytime"
                        /> 
                    </div>

                    <div className="row-04">
                        {foundData.forecast.map( (item, index) => (
                            <TemplateForecast key={index}
                            img={item.img}
                            value={dateDay(item.date)}
                            max={Math.round(item.maxTemp)}
                            min={Math.round(item.minTemp)}
                            />
                        ))}
                    </div>

                </div>
            }
        </div>

    </StyleHome>
  )
}
const StyleHome = styled(motion.section)`
    width: 100%;
    background-color: #fff;
    box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
    position: relative;
    top: -1.7em;
    border-radius: 1em 1em 0 0;
    overflow: hidden;

    @media (min-width: 700px) {
        min-width: 40em;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        top: 0em;
        border-radius: 1em;
    }
    .results-weather {
        width: 100%;
    }

    .foundData {
        width: 100%;
        .row-01,
        .row-02,
        .row-03 {
            display: flex;
            padding-top: 1em;
        }
        .row-04 {
            display: flex;
            justify-content: space-evenly;
            padding: 1em 0 1.8em;
        }

        .forcast {
            background: #FFFFFF;
            box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
            border-radius: 1em;    
        }
    }
`

export default Home