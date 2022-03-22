import styled from 'styled-components'
import { theme } from '../Theme'

export const StyleTemplate = styled.article`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.8em 0;

    span {
        letter-spacing: ${theme.letterSpacing};
        color: ${theme.lightScundariFontColor};
        margin: 0.6em 0 0.3em 0;
    }
    p {
        font-size: 0.5em;
        letter-spacing: 0.1em;
        color: ${theme.lightPrimariFontColor};
        @media (min-width: 500px) {
            
            font-size: 0.8em;
        
        }
    }
`