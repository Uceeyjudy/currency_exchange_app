import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 12.5px 16px;

    background: ${props => props.theme.$styled.colors.cardBackground};
    border-radius: ${props => props.theme.$styled.borderRadius.md};
`
export const StyledAlerts = styled.ul`
    /* height: 350px;
    overflow-y: auto; */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
    gap: 4px;
`
export const StyledAlert = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0px;
    gap: 12px;


    &:hover {
        background-color: ${props => props.theme.$styled.colors.body};
    }

    .trend {
        width: 32px;
        height: 32px;

        padding: 4px;
        background-color: ${props => props.$trendUp ? props.theme.$styled.colors.green50 : props.theme.$styled.colors.red500};

        border-radius: ${props => props.theme.$styled.borderRadius.sm}
    }
`
export const StyledAlertPreview = styled.div`
flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;

    h5 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: ${props => props.theme.$styled.colors.text900};
    }

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;

        color: ${props => props.theme.$styled.colors.text900};

        span {
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${props => props.theme.$styled.colors.text900};
        }
    }
`