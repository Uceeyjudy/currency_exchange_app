import styled from "styled-components";

export const StyledDashboardLayout = styled.div`
    display: grid;
 
    grid-template-columns: 20% 1fr;
    /* grid-template-rows: 140px 1fr; */

    grid-template-areas:
    "messages messages notifications"
    "messages messages notifications"
    "currencies country notifications"
    "currencies country conversions"
    "currencies country conversions";

    grid-gap: 12px;

    /* height: 100vh; */

    #messages {
     grid-area: messages;
    }
    #notifications {
     grid-area: notifications;
    }
    #currencies {
     grid-area: currencies;
    }
    #country {
     grid-area: country;
    }
    #conversions {
     grid-area: conversions;
    }


 @media (max-width: 1080px) {
     grid-template-columns: 1fr;
     /* grid-template-rows: 140px 1fr; */
     grid-template-areas:
        "messages"
        "notifications"
        "currencies"
        "country"
        "conversions";
 }
`