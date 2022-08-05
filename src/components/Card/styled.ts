import styled from "styled-components";

export const CardContainer = styled.div`
        .card {
            margin-top: 4rem;
            background: white;
            color: black;

            border-radius: 8px;
            padding: 1.875rem;
            box-shadow: 1px 1px 5px rgba(0,0,0, 0.1);
            display: flex;
            flex-direction: column;

            justify-content: space-between;


            header {
                p {
                font-size: 0.875rem;
                color: var(--gray);

                }
                h2 {
                font-size: 2.375rem;

                > span {
                    font-size: 1.125rem;
                    font-weight: 400;
                }
                span:last-child {
                    color: var(--gray);
                }
                }
                h6 {
                    font-size: 1.125rem;
                }
            }

            main {
                font-size: 0.875rem;
                color: var(--gray);

                ul {
                    display: flex;
                    gap: 0.9375rem;
                    margin-top: 1.25rem;
                }
            }
        }
        .basic {
            .top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                color: var(--blue);

                button {
                    background: var(--blue);
                    color: white;

                    padding: 0.5rem 1.5rem;
                    border-radius: 40px;
                }
            }
        }
    

    footer {
        margin-top: 1rem;
        display: flex;
        
        button {
            flex: 1;

            padding: 0.75rem 0;

            border: 1px solid var(--blue);
            background: transparent;

            cursor: pointer;

            font-size: 1.125rem;
        }
    }
`;