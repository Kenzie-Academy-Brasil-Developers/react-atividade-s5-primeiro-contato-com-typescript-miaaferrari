import { CardBox } from './style.js';

interface CardProps {
    name: string;
    age: number;
    hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => {

    return (
        <CardBox>
            <h3>Nome: {name}</h3>
            <p>Hobby: {hobby}</p>
            <p>Age: {age}</p>
        </CardBox>
    )
}