import styled from 'styled-components';

export const StyledLayout = styled.div`
    display: grid;
 
    grid-template-columns: 20% 1fr;
    /* grid-template-rows: 120px 1fr; */

    grid-template-areas:

    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main";

    grid-gap: 18px;

    height: 100vh;

    #sidebar {
        grid-area: sidebar;
    }
    #content {
        padding-right: 16px;
        grid-area: main;
        overflow-y: auto;
    }


    @media screen and (max-width: 375px) {
        grid-template-columns: 1fr;
        /* grid-template-rows: 120px 1fr; */
        grid-template-areas:
            "main";
    }
`

