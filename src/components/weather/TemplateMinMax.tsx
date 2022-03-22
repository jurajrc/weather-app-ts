import React from 'react'
// style
import styled from 'styled-components'
import arrow from '../../assets/miniArrow.svg'

interface IProps {
    max: number;
    min: number;
}

const TempMinMax: React.FC<IProps> = ({ max, min }) => {
  return (
    <StyleMinMax>
      <div className="max">
        <p>{max}°C  </p>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="min">
        <p>{min}°C</p>
        <img src={arrow} alt="arrow" />
      </div>
    </StyleMinMax>
  )
}
const StyleMinMax = styled.article`
    width: 33%;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 12%;
    color: #666;
    @media (min-width: 500px) {
      padding-right: 14%;
    }

    .max,
    .min {
      display: flex;
      padding: 0.375em 0;
      img {
        transform: scale(1.1);
        margin-left: 2px;
      }
    }
    .max {
      img {
        transform: translateY(-1px);
      }
    }
    .min {
      img {
        transform: rotate(180deg) translateY(-2.5px);
      }
    }

`

export default TempMinMax