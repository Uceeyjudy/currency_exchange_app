import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        overflow: hidden;
        height: 100vh;

        background: ${(props) => props.theme.$styled.colors.body};
        padding: 0;
        margin: 0;

        color: ${(props) => props.theme.$styled.colors.text900};
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, ul, li, p {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;
