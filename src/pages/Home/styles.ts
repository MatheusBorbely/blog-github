import styled from 'styled-components';

export const HomeContainer = styled.main`
    width: 54rem;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 10rem;

    & > section:last-child{
        display: flex;
        margin-top: 3rem;
        justify-content: space-between;
        gap: 2rem;
    }
`
