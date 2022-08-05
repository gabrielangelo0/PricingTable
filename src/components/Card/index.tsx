import { CardContainer } from "./styled";
import check from '../../assets/check.svg'
import { CardProps } from "../../context/ICardProps";

export function Card ({name, price, content}: CardProps) {

    return (
        <CardContainer>
        <div className="card basic">
                        <div className="masterContent">
                            <header>
                                <div className="top">
                                    <h6>{name}</h6>
                                    <button>Popular</button>
                                </div>
                                <h2>R$ {price}<span>,00</span><span> /mês</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <hr />
                            </header>
                            <main>
                                {content?.map(list => {
                                    return (
                                        <ul>
                                            <li><img src={ check } alt="check" /></li>
                                            <li>{list.content}</li>
                                        </ul>
                                    )
                                })}
                            </main>
                        </div>
                        <footer>
                            <button>ASSINAR</button>
                        </footer>
                    </div>
        </CardContainer>
    )
}