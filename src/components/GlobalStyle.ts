import { createGlobalStyle } from "styled-components";
import graphic_w1080 from '../assets/grafic-1080x607.webp'
import graphic_w1920 from '../assets/grafic-1920x1080.webp'
import graphic_w2560 from '../assets/grafic-2560x1440.webp'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        .app {
            width: 100%;
            min-height: 100vh;
        }
        font-size: 100%;
        overflow-x: hidden;
        background: #fff;
        font-family: 'Barlow', sans-serif;
        
        @media (min-width: 700px) {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-image: url(${graphic_w1080});
            background-position: top right;
            background-size: cover;
        }
        @media screen and (min-height: 620px) and (min-width: 700px) {
            overflow: hidden;
        }

        @media (min-width: 1000px) {
            background-image: url(${graphic_w1920});
            background-position: top right;
            background-size: cover;
        }

        @media (min-width: 1900px) {
            background-image: url(${graphic_w2560});
            background-position: top right;
            background-size: cover;
        }

        .background {
            width: 100%;

            img {
                width: 100%;
                height: auto;
            }
            @media (min-width: 700px) {
                display: none;
            }
        }

    }

    a {
        text-decoration: none;
        font-family: 'Barlow', sans-serif;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`

export default GlobalStyle