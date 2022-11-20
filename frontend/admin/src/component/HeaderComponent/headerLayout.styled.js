import styled from 'styled-components'

export const StyledHeaderWrapper = styled.div`
    margin-block: 49px 67px;

    display: flex;
    align-items: center;
    gap: 32px;
    justify-content: space-between;
`
export const StyledHeaderSearch = styled.div`
    max-width: 720px;
    flex-grow: 1;
`
export const StyledHeaderUtils = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

//  SEARCH
export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 0px 16px;
    gap: 10px;
    margin: 2px;

    border: 1px solid ${props => props.theme.palette.secondary.main};
    border-radius: ${props => props.theme.$styled.borderRadius.xs};

    &:hover {
    border: 'none';
    outline: 1.2px solid ${props => props.theme.palette.secondary.dark};
    }
`
export const StyledSearchIconWrapper = styled.div`
    max-width: 720px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    cursor: pointer;

    width: 44px;
    height: 44px;

    background-color: ${props => props.theme.palette.secondary.main};
    border-radius: ${props => props.theme.$styled.borderRadius.xs};

    &:hover {
        background-color: ${props => props.theme.palette.secondary.dark};;
    }
`
export const StyledSearchInput = styled.input.attrs({
    type: "text",
})`

    background-color: ${props => props.theme.$styled.colors.body};
    color: ${props => props.theme.$styled.colors.text500};
    width: 100%;
    border: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

  &:focus {
    border: 0;
    outline: 0;
  }
`