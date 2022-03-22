import React, {FC} from 'react'
// style
import styled from 'styled-components'

interface IProps {
    img: string;
    main: string;
}

const Sky: FC<IProps> = ({ img, main }) => {
  return (
    <StyleSky>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon" />
        <p>{main}</p>
    </StyleSky>
  )
}
const StyleSky = styled.article`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    //border: 1px solid #000;
    img {
        filter: grayscale(1);
        transform: scale(0.75);
    }
    p {
      font-size: 1.125em;
      font-weight: 500;
      letter-spacing: -0.05em;
      position: absolute;
      bottom: 0.5em;
    }
`

export default Sky