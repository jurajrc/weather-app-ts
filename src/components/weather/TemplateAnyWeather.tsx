import React from 'react'
// style
import { StyleTemplate } from '../Theme/styles'

interface IProps {
    img: string;
    value: string;
    description: string;
}

const TemplateAnyWeather: React.FC<IProps> = ({ img, value, description }) => {
  return (
    <StyleTemplate>
        <img src={img} alt="icon" />
        <span>{value}</span>
        <p>{description}</p>
    </StyleTemplate>
  )
}


export default TemplateAnyWeather