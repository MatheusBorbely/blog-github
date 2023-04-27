import styled from 'styled-components';

export const SearchFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .75rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h2{
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 160%;
            color: ${props => props.theme['base-subtitle']};
        }
        span{
            font-size: .875rem;
            line-height: 160%;
            color: ${props => props.theme['base-span']};
        }
    }

    form{
        input{
            width: 100%;
            padding: .75rem 1rem;
            border-radius: 6px;
            font-size: 1rem;
            line-height: 160%;
            background-color: ${props => props.theme['base-input']};
            color: ${props => props.theme['base-label']}; 
            border: 1px solid ${props => props.theme['base-border']}; 
        }
    }
`