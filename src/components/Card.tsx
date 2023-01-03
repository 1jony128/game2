import {FC} from 'react';
import { Icouple} from 'data/couple';
import {useStore} from 'store/useStore';
import {useCardsStore} from 'store/useCardsStore';

interface CardProps {
    card: Icouple
    cards: Icouple[]
    numberCard: number
}

const Card: FC<CardProps> = ({card, cards, numberCard}) => {

    const showCard = useCardsStore(state => state.showCard)

    const onShow = () => {
        showCard(card.id)
    }

    const onComplete  = cards.filter(item => !item.complete)
    const isTwo = onComplete.filter(item => item.show)


    return (
        <div className={"wrapper_card"}>
            <div
                className={`card  ${card.show && "show"} ${card.complete && " complete"}`}
                onClick={isTwo.length !== 2 ? onShow : () => {}}
            >
                <span className={"number"}>{!card.show && numberCard}</span>
                {card.show && card.name}
            </div>
        </div>

    );
};

export default Card;
