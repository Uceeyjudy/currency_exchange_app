import styled from 'styled-components'

export const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 4px;
    gap: 16px;

    .icon {
        width: 24px;
        height: 24px;
    }

    h3 {
        font-weight: 800;
        font-size: 19px;
        line-height: 23px;
        text-align: center;
        color: ${props => props.theme.$styled.colors.text900};
    }
`