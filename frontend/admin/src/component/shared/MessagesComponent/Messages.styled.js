import styled from 'styled-components'

export const StyledMessagesWrapper = styled.div`
    padding: 12.5px 16px;

    /* max-width: 724px; */

    background: ${props => props.theme.$styled.colors.cardBackground};
    border-radius: ${props => props.theme.$styled.borderRadius.md};
`
export const StyledMessages = styled.ul`
    margin-top: 8px;

    /* height: 216px;
    overflow-y: auto; */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    border: 1px solid ${props => props.theme.$styled.colors.text200};
    border-radius: ${props => props.theme.$styled.borderRadius.md}; 
`
export const StyledMessage = styled.li`
    cursor: pointer;
    position: relative;

    display: flex;
    width: 100%;
    align-items: center;
    padding: 12px 24px;
    gap: 16px;

    border-bottom: 0.5px solid ${props => props.theme.$styled.colors.text300};

    &:hover {
        background-color: ${props => props.theme.$styled.colors.body};
    }

    .unread {
        position: absolute;
        z-index: 50;
        top: 50%;

        right: 20px;

        transform: translateY(-50%);
    }
`
export const StyledMessagePreview = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    
    overflow: hidden;
    

    h5 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        color: ${props => props.theme.$styled.colors.text900};
    }

    p {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        display: block;
        text-overflow: ellipsis;

        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.001em;

        color: ${props => props.theme.$styled.colors.text600};
    }
`
