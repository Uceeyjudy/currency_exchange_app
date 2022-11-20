import styled from 'styled-components'

// TC - trending conversions
export const StyledTCWrapper = styled.div`
    padding: 16px;

    background: #FFFFFF;
    border-radius: ${props => props.theme.$styled.borderRadius.md};
`;

export const StyledTCOptions = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    gap: 4px;
`;
export const StyledTCOption = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 15px;

`;
export const StyledTCOptionMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 28px;

    .tcIcon {
        width: 20px;
        height: 20px;   
    }
`
export const StyledTCOptionCurrency = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;

    .flag {
        width: 26px;
        height: 20px;
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.02em;
        color: ${props => props.theme.$styled.colors.text900};
    }
`
