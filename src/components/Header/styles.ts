import styled from 'styled-components';
import backgroundHeader from '../../assets/backgroundHeader.svg'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    height: 18.5rem;
    
    img{
        max-width: 9.25rem;
        height: 6.125rem;
        padding-top: 4rem;
        position: relative;
        z-index: 2;
        box-sizing: content-box;
    }
    &::before {
        content: '';
        width: 100%;
        height: 18.5rem;
        position: absolute;
        top: 0;
        left: 0;
        background: url(${backgroundHeader});
        background-size: cover;
    }
`