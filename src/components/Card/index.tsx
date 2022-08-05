import { CardContainer } from "./styled";
import check from '../../assets/check.svg'
import { CardProps } from "../../context/ICardProps";

export function Card ({name, price, basic, content}: CardProps) {

    return (
        <CardContainer>
        <div className={basic ? "basic card" : "other card"}>
                            <header>
                                <div className="top">
                                    <div className="paddingTop">
                                        <h6>{name}</h6>
                                        <button>Popular</button>
                                    </div>
                                </div>
                            </header>
                        <div className="masterContent">
                                <h2>R$ {price}<span>,00</span><span> /mês</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <hr />
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
                                <footer>
                                    <button>ASSINAR</button>
                                </footer>
                            </div>
                    </div>
        </CardContainer>
    )
}