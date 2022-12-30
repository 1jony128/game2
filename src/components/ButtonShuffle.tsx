import {FC} from "react";
import {Icouple} from 'data/couple';
import {shuffle} from 'helpers/shuffle';

interface ButtonShuffleProps {
    cards: Icouple[]
    setCards: React.Dispatch<React.SetStateAction<Icouple[]>>
}

const ButtonShuffle: FC<ButtonShuffleProps> = ({cards, setCards}) => {

    const onClick = () => {
        setCards(prevState => ([
            ...shuffle(prevState)
        ]))
    }

    return (
        <div className={"buttton_shuffle"}>
            <button onClick={onClick}>Перемешать</button>
        </div>
    );
};

export default ButtonShuffle;
