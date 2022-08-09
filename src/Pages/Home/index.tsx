import { BackgroundHeader, Content, HomeContainer } from "./styles";
import { Card } from "../../components/Card";
import { useTypewriter } from 'react-simple-typewriter'

export function Home () {
    const items = [
        {
            id: 1,
            name:"Free",
            price:"0",
            basic: false,
            content: [
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            ]
        },
        {
            id: 2,
            name:"Basic",
            price:"29",
            basic: true,
            content: [
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            ]
        },
        {
            id: 3,
            name:"Profesional",
            price:"59",
            basic: false,
            content: [
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
                {type: "list", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            ]
        },
    ]
    const {text} = useTypewriter({
        words: ['Conheça nossos planos'],
        loop: true,
        delaySpeed: 5000,
        deleteSpeed: 70,
      })

    return (
        <HomeContainer>
            <BackgroundHeader>
                <Content>
                <header>
                    <h1>{text}</h1>
                    <p>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto.</p>
                </header>
                <section>
                    {items.map(item => {
                        return (
                            <Card 
                                key={ item.id }
                                name={ item.name }
                                price={ item.price }
                                content= { item.content }
                                basic={ item.basic }
                            />
                        )
                    })}
                </section>
                </Content>
            </BackgroundHeader>
        </HomeContainer>
    )
}