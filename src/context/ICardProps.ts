export interface CardProps {
    name?: string;
    price?: string;

    content?: ContentProps[]
}

export interface ContentProps {
    type?: string ;
    content?: string;
}