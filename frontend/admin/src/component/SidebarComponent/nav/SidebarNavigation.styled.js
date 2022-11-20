import styled from 'styled-components'

export const StyledSidebarNavigation = styled.div`
flex-grow: 1;
padding-block: 24px;
display: flex;
flex-direction: column;

nav {
    display: flex;
    flex-direction: column;
}
`
export const StyledSidebarNavigationOption = styled.div`
padding: 16px 24px;

display: flex;
gap: 24px;
align-items: center;

background-color: ${props => props.$isActive ? props.theme.$styled.colors.blue800 : 'none'};

&:hover {
    background-color: ${props => !props.$isActive && props.theme.$styled.colors.body};
}

.icom{
    margin-inline: auto !important;
    width: 20px;
    height: 20px;
    
}
.option{
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;

    color: ${props => props.$isActive ? props.theme.$styled.colors.text50 : props.theme.$styled.colors.text500};

}
`