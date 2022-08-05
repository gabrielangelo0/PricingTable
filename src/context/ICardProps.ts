export interface CardProps {
    name?: string;
    price?: string;
    basic?: boolean;

    content?: ContentProps[]
}

export interface ContentProps {
    type?: string ;
    content?: string;
}