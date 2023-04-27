import styled from 'styled-components';

export const CardContainer = styled.article`
    width: calc(50% - 1rem);
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background-color: ${props => props.theme['base-post']};

    header{
        display: flex;
        gap: 1rem;
        h3{
            font-size: 1.25rem;
            line-height: 160%;
            max-width: 80%;
            color: ${props => props.theme['base-title']};
        }
        span{
            padding-top: .3125rem;
            font-size: .75rem;
            line-height: 160%;
            color: ${props => props.theme['base-span']};
        }
    }

    p{
        line-height: 160%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -moz-box-orient: vertical;
    }
    
`