import { createGlobalStyle } from 'styled-components';
import { device } from '../utils/device';

export const  GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: transparent !important;
        box-shadow: 0 0 2px ${props => props.theme.blue};
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${props => props.theme['base-text']};
        line-height: 160%;
    }

    body, input, textarea, button {
        font: 400 1rem 'Nunito', sans-serif;
    }

    li {
        list-style: none; 
    }
    
    a{
        text-decoration: none;
    }
    
    ${device.tablet} {
        html{
            font-size: 87.5%;
        }
        main{
            padding: 0 1rem;
        }
    }
`