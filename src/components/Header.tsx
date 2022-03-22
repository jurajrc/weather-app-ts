import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
// Style
import styled from 'styled-components'
import { theme } from './Theme'
// Images
import places_blue from '../assets/places-blue.svg'
// Animation
import { motion } from 'framer-motion'
// Props
import { CoordTown, CoordsMyTowns } from '../types'

interface IProps {
  coord: CoordTown;
  setFindTowns: (findTowns: CoordsMyTowns[]) => void;
  resetTowns: CoordsMyTowns[];
}

const Header: React.FC<IProps> = ({coord, setFindTowns, resetTowns}) => {
  return (
    <StyleHeader>
      <div className="date">
        <p>{moment().format('dddd, D MMM YYYY | h:mm A')}</p>
      </div>

      <div className="coord">
        {coord && (
          <>
            <Link to="/search" 
              onClick={() => setFindTowns(resetTowns)} 
            >{coord.town}, {coord.country}</Link>
            <motion.img
              animate={{y: [2, -2]}}
              transition={{ duration: 0.5, yoyo: Infinity, ease: "easeOut",delay: 1 }}
              src={places_blue} alt="places" />
          </>
        )}
      </div>
    </StyleHeader>
  )
}
const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  @media (min-width: 700px) {
  }

  .date {
    font-size: 0.875em;
    color: ${theme.lightPrimariFontColor};
    margin-left: 0.4em;
    @media (min-width: 500px) {
      font-size: 1em;
      margin-left: 1em;
    }
  }

  .coord {
    display: flex;
    align-items: center;
    background: rgba(13, 159, 234, 0.08);
    padding: 0.4em;
    border-radius: 0 1em 0 1em;
    @media (min-width: 700px) {
      background: rgba(13, 159, 234, 0.2);
      padding: 0.4em 1em;
    }
    @media (max-width: 360px) {
      font-size: 0.9em;
    }

    a {
      color: ${theme.lightLinkFontcolor};
      padding: 0.6em 0;
      text-align: center;
    }

    img {
      margin: 0 0.6em;
      @media (max-width: 373px) {
        margin: 0 0.2em;
      }
    }
  }
`

export default Header