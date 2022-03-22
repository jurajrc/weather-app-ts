import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import places_black from '../assets/places_black.svg'
// Style
import styled from 'styled-components'
import { theme } from '../components/Theme'
// Animation
import { motion, AnimatePresence } from 'framer-motion'
// Types
import { CoordsMyTowns } from '../types'

interface IProps {
  findTowns: CoordsMyTowns[];
  filterTown: (e: string) => void;
  setLocation: (location: string) => void;
  sizeWidth: number;
}

interface IState {
  input: string;
}

const SearchForm: React.FC<IProps> = ({ findTowns, filterTown, setLocation, sizeWidth }) => {

  const [input, setInput] = useState<IState['input']>("")

  const navigete = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLocation(input)
    navigete('/')
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterTown(e.target.value)
    setInput(e.target.value)
  }

  return (
    <StyleSearch
      animate={{opacity: 1, y: '0%'}}
      initial={sizeWidth < 700 ? {opacity: 0.5, y: '100%'} : {opacity: 0, y: '100%'} }
      exit={sizeWidth < 700 ? {opacity: 0.5, y: '100%'} : {opacity: 0, y: '100%'}}
      transition={{ duration: 0.5 }}
    >

      <p className='title'>Location</p>
      
      <form 
        onSubmit={handleSubmit}
      >
          <input 
            type="text"
            placeholder='Search city...'
            onChange={handleInput}
            autoFocus
          />
          <img src={places_black} alt="places" />
        </form>

      <motion.ul layout className='my-towns'>
          <AnimatePresence>
          {findTowns.map((item, index) => (
            <motion.li 
              layout
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              
              key={index} 
              onClick={() => {
                setLocation(item.town); 
              }} 
            >
              <Link 
                to="/"  ><p className='town'>{item.town}</p> <span className='temp'>{item.temp}°C</span> 
              </Link>
            </motion.li>
          ))}
          </AnimatePresence>
        </motion.ul> 

    </StyleSearch>
  )
}
const StyleSearch = styled(motion.section)`
    width: 100%;
    min-height: 94vh;
    background-color: #fff;
    box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 6vh;
    border-radius: 1em 1em 0 0;
    overflow: hidden;

    @media screen and (min-width: 700px) {
      width: 40em;
      min-height: 50vh;
      padding-bottom: 2em;
      border-radius: 1em;
      
      position: static;
    }

    .title {
        color: ${theme.lightPrimariFontColor};
        text-align: center;
        padding: 28px 0;
    }
    form {
        position: relative;
        margin-bottom: 2em;
        input {
            font-style: italic;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            padding: 0.6em;
            width: 90%;
            margin: 0 5%;
            border: none;
            border-radius: 4px;
            background: #F3F3F3;
            color: #9F9F9F;
            outline: none;
        }
        img {
            position: absolute;
            top: 50%;
            right: 10%;
            transform: translateY(-50%);
        }
    }
    .my-towns {
      padding: 0 1.6em;
      color: #444;

      li {
        a {
          font-size: 1.125em;
          font-weight: 400;
          letter-spacing: -0.05em;
          width: 100%;
          padding: 0.45em 0.6em;
          display: flex;
          justify-content: space-between;
          color: #666;

          .town {
            color: #444;
            transition: 300ms all ease;
          }

          .temp {
            font-size: 1rem;
            font-weight: 300;
            letter-spacing: 0em;
          }
        }
        @media screen and (min-width: 700px) {
            &:hover {
              background: #F3F3F3;
              border-radius: 4px;
            }
            &:hover .town {
              transform: translateX(5px);
            }
          }
      }
    }
`

export default SearchForm