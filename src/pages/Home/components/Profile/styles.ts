import styled from 'styled-components';
import { device } from '../../../../utils/device';

export const ProfileContainer = styled.section`
    display: flex;
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    position: relative;
    transform: translateY(-43%);
    background-color: ${(props) => props.theme['base-profile']};

    ${device.mobileL}{
        flex-direction: column;
        transform: translateY(-16%);    
    }
`
export const ProfileImageAvatar= styled.div`
    position: relative;
    width: 100%;
    padding-top: 19.25%;
    max-width: 148px;
    max-height: 148px;

    ${device.mobileL}{
        padding-top: 74.25%;
        max-width: 100%;
        max-height: 170px;   
    }
    

    img{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
    }
`
export const ProfileInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    header{
        display: flex;
        justify-content: space-between;
        padding-top: .5rem;
        h1{
            font-weight: 700;
            font-size: 1.5rem;
            color: ${props => props.theme['base-title']}
        }
        a{
            display: flex;
            align-items: center;
            text-transform: uppercase;
            font-size: 0.75rem;
            gap: .5rem;
            color: ${props => props.theme.blue};
        }
    }
    article{
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    div{
        display: flex;
        gap: 2rem;
        padding-top: 1rem;
        flex-wrap: wrap;

        ${device.mobileL}{
            justify-content: center;  
        }
    }

`
export const ProfileDetails = styled.section`
    display: flex;
    gap: .5rem;
    svg {
        width: 18px;
        height: 18px;
    }
`