import styled from "styled-components";

export const HomeContainer = styled.div`
    text-align: center;

    header {
        display: flex;
        flex-direction: column;
        gap: 1.125rem;
        h1 {
            margin-top: 6.25rem;
            font-size: 3rem;
        }
        p {
            font-size: 1.125rem;
        }
    }

    section {
        display: grid;
        grid-template-columns: repeat(3, 355px);
        margin: 0 auto;
        gap: 1.25rem;
        text-align: left;
    }

    @media (max-width: 768px) {
        section {
            grid-template-columns: 1fr;
        }
    }
    `;

export const BackgroundHeader = styled.div`
    background: var(--blue);
    color: white;
    height: 50vh;
    margin: 0 auto;

    @media (max-width: 768px) {
        height: 70vh;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0rem 1rem;
    
`;