import { createGlobalStyle } from "styled-components";

export const ApiGlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    :root {
        font-size: 0.625em;
    }
    .fro-51-api {
        font-size: 1.6rem;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        overflow-x: hidden;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    h1, h2, h3, h4, h5, h6 {
        color: #0f172a;
        font-weight: 800;
    }
    p {
        color: #555962;
        line-height: 2.4rem;
    }
`;