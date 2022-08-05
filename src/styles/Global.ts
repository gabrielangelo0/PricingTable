import { createGlobalStyle } from "styled-components";

export const ContainerMain = createGlobalStyle`
    :root {
    --yellow: #ffcc29;
    --blue: #1d539e;
    --gray: #828799;
    --page-background: #f9fbfc;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        list-style: none;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;

        outline: none;
        border: none;
        background: transparent;
        color: var(--blue);

        border-radius: 10px;
        font-weight: 700;

        cursor: pointer;
    }
`;