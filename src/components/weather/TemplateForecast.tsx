import React from 'react'
// style
import styled from 'styled-components'
import { StyleTemplate } from '../Theme/styles'
import arrow from '../../assets/mini_arrow2.svg'

interface IProps {
    img: string;
    value: string;
    max: number;
    min: number;
}

const TemplateForecast: React.FC<IProps> = ({ img, value, max, min }) => {
  return (
    <StyleTemplateForcast className='forcast'>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />

        <span>{value}</span>

        <div className="min-max">
            <div className="max">
                <p>{max}°C  </p>
                <img src={arrow} alt="arrow" />
            </div>

            <div className="min">
                <p>{min}°C</p>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    </StyleTemplateForcast>
  )
}
const StyleTemplateForcast = styled(StyleTemplate)`
    width: 27%;
    
    img {
        width: 50%;
    }

    .min-max {
        display: flex;
        @media (min-width: 500px) {
            p {
                font-size: 0.8em;
            }
        }

        .max,
        .min {
            display: flex;
            letter-spacing: 0.1em;
            font-weight: 500;
        }

        img {
            margin-left: 0.1em;
        }

        .min {
            margin-left: 0.4em;
            
            img {
                transform: rotate(180deg);
            }
        }
    }

`

export default TemplateForecast