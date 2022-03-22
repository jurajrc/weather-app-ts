import React, {FC} from 'react'
// style
import styled from 'styled-components'

interface IProps {
    temp: string;
}

const Temp: FC<IProps> = ({ temp }) => {
  return (
    <StyleTemp>
        <h1>{temp}</h1>
        <span>°C</span>
    </StyleTemp>
  )
}
const StyleTemp = styled.article`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid #000;
    h1 {
        font-size: 4em;
        font-weight: 300;
    }
    span {
        font-size: 1.5em;
        color: #666;
        position: relative;
        top: -0.6em;
    }
`

export default Temp