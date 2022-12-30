import {Dispatch, FC, SetStateAction} from 'react';
import { Icouple} from 'data/couple';

interface CardProps {
    card: Icouple
    setCards: Dispatch<SetStateAction<Icouple[]>>
    cards: Icouple[]
    numberCard: number
}

const Card: FC<CardProps> = ({card, setCards, cards, numberCard}) => {

    const onShow = () => {
        setCards(prevState => {
            return [...prevState.map(item => {
                    if(item.id === card.id){
                        item.show = true
                    }
                    return item
                })]
        })
    }

    const onComplete  = cards.filter(item => !item.complete)
    const isTwo = onComplete.filter(item => item.show)


    return (
        <div
            className={`card  ${card.show && "show"} ${card.complete && " complete"}`}
            onClick={isTwo.length !== 2 ? onShow : () => {}}
        >
            <span className={"number"}>{!card.show && numberCard}</span>
            {card.show && card.name}
        </div>
    );
};

export default Card;
