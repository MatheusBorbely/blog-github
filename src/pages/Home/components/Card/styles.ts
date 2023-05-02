import styled from 'styled-components';
import { device } from '../../../../utils/device';

export const CardContainer = styled.article`
    width: calc(50% - 1rem);
    padding: 2rem;
    border-radius: 10px;
    background-color: ${props => props.theme['base-post']};
    a{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    header{
        display: flex;
        gap: 1rem;
        h3{
            font-size: 1.25rem;
            line-height: 160%;
            flex: 1;
            min-height: 4rem;
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
        color: ${props => props.theme['base-text']}
    }

    ${device.mobileL}{
        width: auto;
    }
    
`