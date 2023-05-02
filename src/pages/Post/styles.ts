import styled from 'styled-components';
import { device } from '../../utils/device';

export const PostContainer = styled.main`
    width: 54rem;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 10rem;
`
export const PostHeader = styled.header`
    display: flex;
    gap: .6rem;
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    position: relative;
    transform: translateY(-43%);
    flex-direction: column;
    background-color: ${(props) => props.theme['base-profile']};

    h1{
        font-weight: 700;
        font-size: 1.5rem;
        margin-top: .75rem;
        color: ${props => props.theme['base-title']}
    }
    nav{
        display: flex;
        justify-content: space-between;
        width: 100%;
        a{
            display: flex;
            align-items: center;
            text-transform: uppercase;
            font-size: 0.75rem;
            gap: .5rem;
            color: ${props => props.theme.blue};
        }
    }
   
    section{
        display: flex;
        gap: 2rem;

        ${device.mobileL}{
           flex-wrap: wrap;
           justify-content: center;
           margin-top: 1rem;
        }
    }
`
export const PostDetails = styled.div`
    display: flex;
    gap: .5rem;
    span{
        color: ${props => props.theme['base-span']};
    }
    svg {
        width: 18px;
        height: 18px;
    }
`
export const PostContent = styled.article`
    padding: 2.5rem 2rem;
    margin-top: calc( -165px / 2.5);
    max-width: 100%;
    p{
        line-height: 160%;
        max-width: 100%;
    }
    pre {
    
        max-width: 100%;
        code {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            gap: .5rem;
            border-radius: 2px;
            background-color: ${(props) => props.theme['base-post']};
            font-family: 'Fira Code';
            margin: 1rem 0;
            max-width: 100%;
            flex-wrap: wrap;
        }
    }
`

