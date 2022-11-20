import styled from 'styled-components'

export const StyledSidebarWrapper = styled.div`
    background-color: ${(props) => props.theme.$styled.colors.cardBackground};

    /* width: 237px; */
    overflow: hidden;

    display: flex;
    flex-direction: column;


    height: 100vh;

    @media (max-width: 375px) {
        display: none;
    }
`;

// TOP

export const StyledSidebarTopBlock = styled.div`
    
    margin: 64px 0px 120px;
`
export const StyledSidebarTopHeader = styled.div`
    width: fit-content;
    margin-inline: auto;

    h2{
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        display: flex;
        align-items: center;
        text-align: center;

        color: ${props => props.theme.$styled.colors.text900};
    }
`